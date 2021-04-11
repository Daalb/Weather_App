const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const {API_VERSION} = require('./config');

//Carga de rutas
const userRoutes = require('./routes/user');
const favRoutes = require('./routes/fav');


//Bodyparser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Rutas
app.use(`/api/${API_VERSION}`,userRoutes);
app.use(`/api/${API_VERSION}`,favRoutes);



module.exports = app;