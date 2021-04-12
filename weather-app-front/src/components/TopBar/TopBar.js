//Liberias
import React from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom';
import { MenuUnfoldOutlined,PoweroffOutlined,MenuFoldOutlined } from '@ant-design/icons';

//Api
import {logout} from '../../api/auth';

//Assets
import Logo from '../../assets/icons8-rain-100.png';

//Estilos
import './TopBar.scss';

export default function TopBar(props){
    const {menuCollapsed, setMenuCollapsed} = props;
    const logoutUser = ()=>{
        logout();
        window.location.reload();
    }
    return(
        <div className="topbar">
            <div className="topbar__left">
                    <img 
                        className="topbar__left-logo"
                        src={Logo}
                        alt="Logo weather app"
                        
                    />
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    {menuCollapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                </Button>
            </div>
            <div className="topbar__right">
                <Button type="link" onClick={logoutUser}>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    );
}