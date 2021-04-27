//require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')
let port = 9876
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
let data = require('../data.json')

const router = require('./router/router')

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect('mongodb://localhost/CRM', { useNewUrlParser: true }).then(() => {
    mongoose.set('useFindAndModify', false);
    app.use('/', router)


    app.listen(port, () => console.log(`Running server on port ${port}`))
})