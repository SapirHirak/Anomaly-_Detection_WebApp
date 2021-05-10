///////// nodemon

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')
const app = express()
const api = require('../Addon/build/Release/API')

let id = 0;
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
        
        console.log(api.detect(`temp/${file.name}`, 0));
        res.json({ file: `temp/${file.name}` });
    });
})

app.delete('/uploadDelete', (req, res, next) => {
   api.delete(req);
   return res.status(500);
});

app.listen(1234, () => console.log(`Running server on port 1234`))