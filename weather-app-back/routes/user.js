//Importaciones
const express = require('express');
const UserController = require('../controllers/user');

const api = express.Router();

//Rutas
api.post("/add-user",UserController.addUser);
api.get("/get-default-city",UserController.getDefaultCity)

module.exports = api;
