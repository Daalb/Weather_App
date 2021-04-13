//Liberias
import React,{ useState } from 'react';
import {Layout} from 'antd';

//Componentes
import SearchBar from '../../components/SearchBar';
import CountryInfo from '../../components/CountryInfo';
//Estilos
import './Search.scss';

export default function Search(){
    const {Header,Content} = Layout;
   

    return(
        <Layout>
            <Layout className="layout-search">
                <Header className="layout-search__header"> 
                    <SearchBar/>
                </Header>
                <Content className="layout-search__content">
                    <CountryInfo/>
                </Content>
            </Layout>
           
        </Layout>
    );
}