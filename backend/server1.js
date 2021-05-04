///////// nodemon

const express = require('express')
// const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/// app.use(cors())

app.get("/api/model", function (req, res) {
    res.status(200).json({ result: req.params.id })
})

app.post("/api/model", function (req, res) {
    console.log(req.body)
    res.send("I am Post func " + req.body.name)
    // res.status(404).json({ id: 1, username: "liranal" })
})

app.listen(9876, () => console.log(`Running server on port 9876`))