const mongoose = require("mongoose");
const app = require("./app");
const PORT_SERVER = process.env.PORT || 3977;
const{ API_VERSION,IP_SERVER,PORT_DB } = require("./config");


mongoose.set("useFindAndModify", false);
mongoose.set('useCreateIndex', true);

//Conexión a la BD
mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/weatherBD`,
{useNewUrlParser: true,useUnifiedTopology: true},(err,res)=>{
    if(err){
        throw err;
    }else{
        console.log("La conexión a la base de datos fue exitosa");
        app.listen(PORT_SERVER,()=>{
            console.log("#########################");
            console.log("########API REST########");
            console.log("#########################");
            console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);
        })
    }
});