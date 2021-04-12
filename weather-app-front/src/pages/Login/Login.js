//Liberias
import React,{useState,useEffect} from 'react';
import {Button,notification} from 'antd';
import {Link} from 'react-router-dom';

//Componentes
import LoginComp from '../../components/LoginComp'; 

//API
import {addUserApi} from '../../api/user';

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
            <LoginComp/>
          </div>
      </div>
    );
}