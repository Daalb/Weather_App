//Importaciones
const Fav = require('../models/fav');

//Funciones 
function addFav(req,res){
   const fav = new Fav();
   const {idGoogle, favList} = req.body;
   fav.idGoogle = idGoogle;
   fav.favList = favList; 

   fav.save((err,favStored) => {
       if(err){
           res.status(500).send({message: "Error del servidor"});
       }else{
        if(!favStored){
            res.status(404).send({message:"Error al crear favoritos"});
        }else{
            res.status(200).send({user: favStored});
        }
       }
   })
}


//Exportando funciones
module.exports = {
    addFav
};