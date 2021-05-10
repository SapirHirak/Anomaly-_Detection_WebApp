const express = require('express');

// express app
const server = express();

// register view engine
server.set('view engine', 'ejs');
// server.set('views', 'backend') // if not in the same directory

// listen to requests
server.listen(9876);

// get for every URL that we want to listen to
/****************
 * need to put this in the main directory because of the paths
 **************/
server.get('/', (req, res) => { // root domain listen
    //res.send('<p>home page</p>');
    const models = [
        {title: 'Aviv Spongebob', snippet: 'aba'},
        {title: 'Ariel Squidward', snippet: 'gamal'},
        {title: 'Sapir Ms.Puff', snippet: 'shoter'},
    ];
    // sends the client an html file
    res.render('index', { title: 'Home' , models });
    // res.sendFile('/index.html', {root: __dirname});
});

server.get('/api', (req, res) => {
    //res.send('<p>api page</p>');
    res.render('api', { title: 'API' });
});

server.get('/api/model', (req, res) => {
    //res.send('<p>model page</p>');
    res.render('model', { title: 'upload a new model' });
});

// redirects
server.get('/api-us', (req, res) => {
    res.redirect('/api');
});

// 404 page
// because it has no url it goes for EVERY url (happens only if there was no match above)
server.use((req, res) => {
    // res.status(404).sendFile('/404.html', {root: __dirname});
    res.status(404).render('404', { title: '404' });
});


// old stuff probably delete **********************************************
/*//require('dotenv').config()

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
})*/