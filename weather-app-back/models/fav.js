//Importaciones
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Modelo Favoritos
const FavsSchema = Schema({
    idGoogle: {
        type: String,
        unique: true
    },
    favList:[String],
    defaultCountry: String
});

module.exports = mongoose.model("Favs",FavsSchema);
