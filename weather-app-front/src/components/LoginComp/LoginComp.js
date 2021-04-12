//Liberias
import React from 'react';
import {GoogleLogin} from 'react-google-login';
import {Button} from 'antd';
import {Link} from 'react-router-dom';

//API
import {addUserApi} from '../../api/user';

export default function LoginComp(){
    const clientId="13200041685-306c7vr1krelf3aa9ufhusvean286cdj.apps.googleusercontent.com";

    const responseGoogle = (response) => {
      console.log(response);
      addUserApi(response);
      //window.location.href="/app";
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
