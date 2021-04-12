//Importaciones
const User = require('../models/user');

//Funciones 
function addUser(req,res){
    const user = new User();
    const{ Aa,Rs,tc } = req.body;
    const token =  tc.id_token;
    user.name = Rs.Te.toLowerCase();
    user.email = Rs.At.toLowerCase();
    user.idGoogle = Aa;
    user.defaultCountry = "Colombia";
    
    User.findOne({"idGoogle":Aa},(err,person) => {
        if(err){
            console.log("Error");
        }else if(!person){
            user.save((err,userStored) =>{
                if(err){
                    res.status(500).send({message: "El usuario ya existe"})
                }else{
                    if(!userStored){
                        res.status(404).send({message:"Error al crear el usuario"});
                    }else{
                        res.status(200).send({accessToken: token})
                    }
                }
            })

        }else{
            res.status(200).send({accessToken: token})
        }
    })

    
}



//Exportando funciones
module.exports = {
    addUser
};