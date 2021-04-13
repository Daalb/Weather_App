//Librerias
import React from 'react';
import {Card,Button,Col,Row} from 'antd';
import {Link} from 'react-router-dom';
// import {EnvironmentTwoTone } from '@ant-design/icons';


//Assets
import placeholder from '../../assets/placeholder.svg';
import temperatureIcon from '../../assets/temperature.svg'
import foggy from '../../assets/foggy.svg'
import windIcon from '../../assets/wind.svg'


//Estilos
import './CountryInfo.scss';


export default function CountryInfo(props){
    const {city,country,description,humidity,temperature,wind} = props
    const titulo = `Localización: ${city}, ${country}`
    console.log(props);
    return(
        <div className="country-info">
            <Row className="country-info__container" >
                <Col span={8}/>
               
                    <Col span={8}>
                        <Link to="/app/country"> 
                            <Card title={titulo} className="country-info__container__details right">
                            <p><img src={placeholder}/> Ubicación: {city}, {country}</p>
                            <p><img src={temperatureIcon}/> Temperatura:{temperature} ℃, {description}</p>
                            <p><img src={foggy}/> Humedad: {humidity}</p>
                            <p><img src={windIcon}/>Velocidad del viento:{wind}</p>
                            </Card>
                        </Link>
                    </Col>
               
                <Col span={8}/>
            </Row>
        </div>
    );
}