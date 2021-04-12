//Liberias
import React from 'react';
import {GoogleLogin} from 'react-google-login';
import {Button,notification} from 'antd';
import {Link} from 'react-router-dom';

//Constantes
import {ACCESS_TOKEN} from '../../utils/constants';

//API
import {addUserApi} from '../../api/user';

export default function LoginComp(){
    const clientId="13200041685-306c7vr1krelf3aa9ufhusvean286cdj.apps.googleusercontent.com";

    const responseGoogle = async (response) => {
      console.log(response);
      const result = await addUserApi(response);
      if(result.message){
        notification['error']({
          message: result.message
        })
      } else {
        console.log(result.message);
        const { accessToken } = result;
        localStorage.setItem(ACCESS_TOKEN,accessToken);
        notification['success']({
          message: "Almacenado correctamente"
        })  
      }
      window.location.href="/app";
    }

    return(
        <GoogleLogin
        clientId={clientId}
        render={renderProps => (
            <Button type="primary" onClick={renderProps.onClick}>
              Ingresa con tu cuenta de Google
            </Button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    );   
}
