//Liberias
import React from 'react';
import {Button} from 'antd'

//Estilos
import './Login.scss';

//Asets
import Logo from'../../assets/icons8-rain-100.png';

export default function Login(){
  
    return(
      <div className="login">
          <div className="login__content">
            <h1>Ingresar</h1>
            <img src={Logo} alt="logo weather-app"/>
            <Button type="primary">
                Ingresa con tu cuenta de Google
            </Button>
          </div>
      </div>
    );
}