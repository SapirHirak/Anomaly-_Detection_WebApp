///////// nodemon

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')
const app = express()
const api = require('../Addon/build/Release/API')

let d = new Date();
let id = 0;
let models = new Map();
let lastAnomaly;
// let arr = []
// let counter = 0
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors())

// app.get("/api/model", function (req, res) {
//     res.status(200).json({ result: "Hello world" })
// })

// app.post("/api/model", function (req, res) {
//     console.log(req.body)
//     arr.push(counter++)
//     res.json({ data: arr })
//     // res.status(404).json({ id: 1, username: "liranal" })
// })

app.post('/uploadLearn', (req, res, next) => {
    // console.log(req.files.file);
    let file = req.files.file;

    csvData = file.data.toString('utf8');
    // console.log(csvData)
    file.mv(`${__dirname}/temp/${file.name}`, function (err) {
        if (err) {
            return res.status(500).send(err);
        }
        models.set(id, {name: file.name, id: id, time:
            d.getUTCFullYear() + "-" + d.getUTCMonth() + "-" + d.getUTCDate() + "T" + 
            d.getUTCDate() + ":" + d.getUTCHours() + ":" + d.getUTCMinutes() + ":" + d.getUTCSeconds() + "+02.00"});
        api.learn(`${__dirname}/temp/${file.name}`, id++, "regression");
        res.json({ file: `temp/${file.name}` });
    });
})

app.post('/uploadDetect', (req, res, next) => {
    // console.log(req.files.file);
    let file = req.files.file;

    csvData = file.data.toString('utf8');
    // console.log(csvData)
    file.mv(`${__dirname}/temp/${file.name}`, function (err) {
        if (err) {
            return res.status(500).send(err);
        }
        
        lastAnomaly = api.detect(`temp/${file.name}`, 0);
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
   api.delete(req);
   models.delete(req);
   return res.status(200);
});

app.listen(1234, () => console.log(`Running server on port 1234`))