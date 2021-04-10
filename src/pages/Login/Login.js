//Liberias
import React from 'react';
import {Layout,Button} from 'antd'

//Estilos
import './Login.scss';

export default function Login(){
    const {Content} = Layout;
    return(
       <Layout className="login">
           <Content className="login__content">
                <h1>Ingresar</h1>
                <Button type="primary">Ingresar con cuenta de Google</Button>    
           </Content>
       </Layout>
    );
}