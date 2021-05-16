
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')
const app = express()
const api = require('../Addon/build/Release/API')

let d = new Date();
let id = 0;
let models = [];
let lastAnomaly;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors())

app.post('/uploadLearn', (req, res, next) => {
    let file = req.files.file;
    let type = req.body.type;

    csvData = file.data.toString('utf8');
    file.mv(`${__dirname}/temp/${file.name}`, function (err) {
        if (err) {
            return res.status(500).send(err);
        }
        models.push({id: id, fileName: file.name, type: type, time:
            d.getUTCFullYear() + "-" + d.getUTCMonth() + "-" + d.getUTCDate() + "T" + 
            d.getUTCDate() + ":" + d.getUTCHours() + ":" + d.getUTCMinutes() + ":" + d.getUTCSeconds() + "+02.00"});
        api.learn(`${__dirname}/temp/${file.name}`, id++, type);
        res.json({ file: `temp/${file.name}` });
    });
})

app.post('/uploadDetect', (req, res, next) => {
    let file = req.files.file;
    let reqId = req.body.id;
    csvData = file.data.toString('utf8');
    file.mv(`${__dirname}/temp/${file.name}`, function (err) {
        if (err) {
            return res.status(500).send(err);
        }
        
        lastAnomaly = api.detect(`temp/${file.name}`, reqId);
        res.json({ file: `temp/${file.name}` });
    });
})

app.get('/getAnomaly', (req, res, next) => {
    return res.send(lastAnomaly);
})

app.get('/getModels', (req, res, next) => {
    return res.send(models);
})

app.delete('/deleteModel', (req, res, next) => {
   api.delete(req.params.id);
   models = models.filter(currentItem => req.params.id !== currentItem.id);
   models.delete(req.params.id);
   return res.status(200);
});

app.listen(1234, () => console.log(`Running server on port 1234`))