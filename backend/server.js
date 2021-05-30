// useful for opening a server
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
// useful for uploading files
const fileUpload = require('express-fileupload')
const app = express()
// includes the c++ anomaly detector api
const api = require('../Addon/build/Release/API')
// for saving model upload date
let d = new Date();

// intialize the id for uploaded models
let id = 0;

// array of models
let models = [];

// the last anomaly file uploaded
let lastAnomaly;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors())

// post request to upload a model
app.post('/uploadLearn', (req, res, next) => {

    // uploaded file
    let file = req.files.file;

    // the model type (regression or hybrid)
    let type = req.body.type;

    csvData = file.data.toString('utf8');

    // saves the file in a temp file called temp
    file.mv(`${__dirname}/temp/${file.name}`, function (err) {
        if (err) {
            return res.status(500).send(err);
        }

        // add the new model to the model array
        models.push({id: id, fileName: file.name, type: type, time:
            d.getUTCFullYear() + "-" + d.getUTCMonth() + "-" + d.getUTCDate() + "T" + 
            d.getUTCDate() + ":" + d.getUTCHours() + ":" + d.getUTCMinutes() + ":" + d.getUTCSeconds() + "+02.00"});

        // calls the learn function from the API/Addon
        api.learn(`${__dirname}/temp/${file.name}`, id++, type);
        res.json({ file: `temp/${file.name}` });
    });
})

// post request to upload a test file, it uploads it and detects the anomalies using the API/Addon
app.post('/detect', (req, res, next) => {
    // retrieving the data from the post request
    let file = req.files.file;
    let reqId = req.body.id;
    csvData = file.data.toString('utf8');
    // receiving the file
    file.mv(`${__dirname}/temp/${file.name}`, function (err) {
        if (err) {
            return res.status(500).send(err);
        }
        // calling the api to detect the anomalies on the file we received using the model we provided
        // saves received anomalies in a json for later use
        lastAnomaly = api.detect(`temp/${file.name}`, reqId);
        res.json({ file: `temp/${file.name}` });
    });
})


// get request to return the detected anomalies from the test file uploaded
app.get('/getAnomaly', (req, res, next) => {
    return res.json(JSON.parse(lastAnomaly));
})

// get request to return the model array
app.get('/getModels', (req, res, next) => {
    return res.json(models);
})

// delete request to delete the requested model with the given ID
app.delete('/deleteModel', (req, res, next) => {
    // removes model from the api
    api.deleteModel(req.body.id);
    // removes model from our local list
    models = models.filter(currentItem => req.body.id !== currentItem.id);
    return res.json(models);
});

// listens to port 1234
app.listen(1234, () => console.log(`Running server on port 1234`))