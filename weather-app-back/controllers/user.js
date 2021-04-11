//Importaciones
const User = require('../models/user');

//Funciones 
function addUser(req,res){
    const user = new User();
    const{ name, email, idGoogle, defaultCountry} = req.body;
    user.name = name;
    user.email = email;
    user.idGoogle = idGoogle;
    user.defaultCountry = defaultCountry;
    
    user.save((err,userStored) =>{
        if(err){
            res.status(500).send({message: "El usuario ya existe"})
        }else{
            if(!userStored){
                res.status(404).send({message:"Error al crear el usuario"});
            }else{
                res.status(200).send({user: userStored});
            }
        }
    })
}


//Exportando funciones
module.exports = {
    addUser
};