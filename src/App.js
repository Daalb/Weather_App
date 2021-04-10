//Liberias
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Configuracion de las rutas
import routes from './config/routes';

 
//La app se envuelve en la configuracion de las rutas
export default function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index)=>(
          <RouteWithSubRoutes key={index}{...route}/>
        ))} 
      </Switch>
    </Router>
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



