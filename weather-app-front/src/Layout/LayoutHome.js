//Librerias
import React,{useState} from 'react';
import {Layout} from 'antd';
import {Route, Switch} from 'react-router-dom';

//Componentes
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
//Estilos
import './LayoutHome.scss';

export default function LayoutHome(props){
    const {routes} = props;
    const {Header,Content,Footer} = Layout;
    const [menuCollapsed, setMenuCollapsed] = useState(false);


    return(
       <Layout>
           <SideBar menuCollapsed ={menuCollapsed}/>
           <Layout className="layout" style={{ marginLeft: menuCollapsed ? "80px" : "200px"}}>
                <Header className="layout__header">
                    <TopBar menuCollapsed ={menuCollapsed} 
                    setMenuCollapsed = {setMenuCollapsed}/>
                </Header>
                <Content className="layout__content">
                    <LoadRoutes routes={routes}/>
                </Content>
                <Footer style={{ textAlign: 'center' }}  className="layout__footer">
                    Weather App
                </Footer>
            </Layout>
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