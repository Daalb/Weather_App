//Librerias
import React from 'react';
import {Layout} from 'antd';
import {Route, Switch} from 'react-router-dom';

//Estilos
import './LayoutHome.scss';

export default function LayoutHome(props){
    console.log(props);
    const {routes} = props;
    const {Header,Content,Footer} = Layout;

    return(
       <Layout>
           <Header>
               Cabecera
           </Header>
           <Content>
               <LoadRoutes routes={routes}/>
           </Content>
           <Footer>
               Footer
           </Footer>
       </Layout>
    );
}

function LoadRoutes({routes}){
    return(
        <Switch>
            {routes.map((route,index)=>(
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    );
}