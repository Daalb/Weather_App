//Liberias
import React,{useState,useEffect} from 'react';
import {Button} from 'antd';
import GoogleLogin from 'react-google-login';

//API
import {addUserApi} from '../../api/user';

//Estilos
import './Login.scss';

//Asets
import Logo from'../../assets/icons8-rain-100.png';

export default function Login(){
  const [data,setData] = useState({
    name: "",
    email: "",
    idGoogle: "",
    defaultCountry: "Colombia"
  });

  const responseGoogle = (response) => {
    console.log(response.profileObj);
  }
  
    return(
      <div className="login">
          <div className="login__content">
            <h1>Ingresar</h1>
            <img src={Logo} alt="logo weather-app"/>
            <GoogleLogin
              clientId="13200041685-306c7vr1krelf3aa9ufhusvean286cdj.apps.googleusercontent.com"
              render={renderProps => (
                <Button type="primary" onClick={renderProps.onClick}>
                    Ingresa con tu cuenta de Google
                </Button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />,
            <Button type="primary">
            </Button>
          </div>
      </div>
    );
}