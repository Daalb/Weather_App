//Liberias
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'antd/dist/antd.css';

//Contexto
import AuthProvider from './providers/AuthProvider';

//Configuracion de las rutas
import routes from './config/routes';



 
//La app se envuelve en la configuracion de las rutas
export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {routes.map((route, index)=>(
            <RouteWithSubRoutes key={index}{...route}/>
          ))} 
        </Switch>
      </Router>
    </AuthProvider>
    
  );
}


function RouteWithSubRoutes(route){  
  return (
    <Route
      path = {route.path}
      exact = {route.exact}
      render = {props=><route.component routes={route.routes} {...props}/>}
    />  
  );
}



