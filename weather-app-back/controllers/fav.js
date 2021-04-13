//Importaciones
const Fav = require('../models/fav');

//Funciones 
function addFav(req,res){
   const fav = new Fav();
   console.log(req.body);
//    const {idGoogle, favList,defaultCountry} = req.body;
//    fav.idGoogle = idGoogle;
//    fav.favList = favList; 
//    fav.defaultCountry = defaultCountry;

//    fav.save((err,favStored) => {
//        if(err){
//            res.status(500).send({message: err});
//        }else{
//         if(!favStored){
//             res.status(404).send({message:"Error al crear favoritos"});
//         }else{
//             res.status(200).send({user: favStored});
//         }
//        }
//    })
}


//Exportando funciones
module.exports = {
    addFav
};