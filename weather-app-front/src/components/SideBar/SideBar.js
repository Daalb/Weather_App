//Liberias
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Layout, Menu} from 'antd';
import {HomeOutlined, SearchOutlined ,HeartOutlined , MenuOutlined, FundOutlined }  from '@ant-design/icons';

//Estilos
import './SideBar.scss';

function SideBar(props){
    const {menuCollapsed, location } = props;
    const {Sider} = Layout;
    return(
        <Sider className = "sidebar" collapsed={menuCollapsed}>
           <Menu mode="inline" defaultSelectedKeys={[location.pathname]}>
               <Menu.Item key="/app">
                   <Link to={"/app"}>
                        <HomeOutlined />
                        <span className="nav-text">Home</span>
                   </Link>
               </Menu.Item>
               <Menu.Item key="/app/search">
                   <Link to={"/app/search"}>
                        <SearchOutlined />
                        <span className="nav-text">Search</span>
                   </Link>
               </Menu.Item>
               <Menu.Item key="/app/fav">
                   <Link to={"/app/fav"}>
                        <HeartOutlined />
                        <span className="nav-text">Favorites</span>
                   </Link>
               </Menu.Item>
           </Menu>
       </Sider>
    );
}

export default withRouter(SideBar);