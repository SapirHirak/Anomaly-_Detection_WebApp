///////// nodemon

const express = require('express')
// const cors = require('cors')
const bodyParser = require('body-parser');
const fileUpload = require('ex')
const app = express()

let arr = []
let counter = 0
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
/// app.use(cors())

app.get("/api/model", function (req, res) {
    res.status(200).json({ result: req.params.id })
})

app.post("/api/model", function (req, res) {
    console.log(req.body)
    arr.push(counter++)
    res.json({ data: arr })
    // res.status(404).json({ id: 1, username: "liranal" })
})

app.post('/upload', (req, res, next) => {
    console.log(req);
    let file = req.files.file;

    file.mv(`${__dirname}/public/${req.body.filename}.csv`, function (err) {
        if (err) {
            return res.status(500).send(err);
        }

        res.json({ file: `public/${req.body.filename}.csv` });
    });

})

app.listen(9876, () => console.log(`Running server on port 9876`))