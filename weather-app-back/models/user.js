//Importaciones
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Modelo Usuarios
const UserSchema = Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    idGoogle:{
        type: String,
        unique: true
    },
    defaultCountry: String
});

module.exports = mongoose.model("User",UserSchema);

