//Importaciones
const express = require('express');
const FavController = require('../controllers/fav');

const api = express.Router();

//Rutas
api.post("/add-fav",FavController.addFav);

module.exports = api;
