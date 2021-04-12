import { basePath, apiVersion} from './config';
import {ACCESS_TOKEN} from '../utils/constants';
import jwtDecode from "jwt-decode";


export function getAccessTokenApi(){
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if (accessToken === undefined) {
        localStorage.clear();
    } else {
        if (!accessToken || accessToken === "null" ) {
            return null;
        } 
    }
    return willExpireToken(accessToken) ? null : accessToken;//Si caducó retorna null
}

//Funcion encargada de verificar si el token sigue activo o expiró
function willExpireToken(token){
    const seconds = 60;//Tiempo de expiracion del token
    const metaToken = jwtDecode(token);
    const { exp } = metaToken;
    const now = (Date.now() + seconds) / 1000;//Pasar a milisegundos
    console.log(metaToken);
   //const expCaducado = exp - 10000000
    
    return now > exp;  //True expirado - False no expirado 
    
}

export function logout(){
    localStorage.removeItem(ACCESS_TOKEN);
}