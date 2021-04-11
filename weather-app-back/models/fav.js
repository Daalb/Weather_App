//Importaciones
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Modelo Favoritos
const FavsSchema = Schema({
    googleId: {
        type: String,
        unique: true
    },
    favList:[String]
});

module.exports = mongoose.model("Favs",FavsSchema);
