//Liberias
import React,{useState,useEffect} from 'react';
import {Button,notification} from 'antd';
import GoogleLogin from 'react-google-login';
import {Link} from 'react-router-dom';

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


 
  const resetData = () => {
    setData({
      name: "",
      email: "",
      idGoogle: "",
      defaultCountry:"Colombia"
    })
  }
  // const login =  (data) =>{
  //   const result = addUserApi(data);
  //   if(!result.ok){
  //     notification['error']({
  //       message: result.message
  //    })
  //   }else{
  //     notification['success']({
  //       message: "Login correcto"
  //     })
  //   }
  //   resetData();
  // } 

  console.log("s");
  useEffect(() => {
    addUserApi(data);
    
  },[])

  const responseGoogle = (response) => {
    //console.log(response.profileObj.name);
    setData({...data,name:response.profileObj.name})
    setData({...data,name:response.profileObj.email})
  }
  
    return(
      <div className="login">
          <div className="login__content">
            <h1>Ingresar</h1>
            <img src={Logo} alt="logo weather-app"/>
            <GoogleLogin
              clientId="13200041685-306c7vr1krelf3aa9ufhusvean286cdj.apps.googleusercontent.com"
              render={renderProps => (
                <Link to="/app">
                  <Button type="primary" onClick={renderProps.onClick}>
                    Ingresa con tu cuenta de Google
                  </Button>
                </Link>
                
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
      </div>
    );
}