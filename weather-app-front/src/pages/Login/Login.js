//Liberias
import React from 'react';
import {Redirect} from 'react-router-dom';

//Componentes
import LoginComp from '../../components/LoginComp'; 

//API
import {getAccessTokenApi} from '../../api/auth';
//Estilos
import './Login.scss';

//Asets
import Logo from'../../assets/icons8-rain-100.png';

export default function Login(){
    //Al encontrarse en el home e intentar regresar a login se redirige a /app (home)
   if(getAccessTokenApi()){
    return(<Redirect to="/app"/>)
   }
    return(
      <div className="login">
          <div className="login__content">
            <h1>Ingresar</h1>
            <img src={Logo} alt="logo weather-app"/>  
            <LoginComp/>
          </div>
      </div>
    );
}