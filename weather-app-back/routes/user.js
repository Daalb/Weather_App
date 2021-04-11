//Importaciones
const express = require('express');
const UserController = require('../controllers/user');

const api = express.Router();

//Rutas
api.post("/add-user",UserController.addUser);

module.exports = api;
