const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const {API_VERSION} = require('./config');

//Bodyparser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



module.exports = app;