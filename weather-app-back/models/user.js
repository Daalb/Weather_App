//Importaciones
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Modelo Usuarios
const UserSchema = Schema({
    name: String,
    email: String,
    idGoogle:String,
    defaultCountry: String
});

module.exports = mongoose.model("User",UserSchema);

    