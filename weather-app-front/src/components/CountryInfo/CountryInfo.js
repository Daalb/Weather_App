//Librerias
import React,{useState} from 'react';
import {Card,Button,Col,Row,notification} from 'antd';
import {Link} from 'react-router-dom';
import { HeartTwoTone } from '@ant-design/icons';


//Assets
import placeholder from '../../assets/placeholder.svg';
import temperatureIcon from '../../assets/temperature.svg'
import foggy from '../../assets/foggy.svg'
import windIcon from '../../assets/wind.svg'


//Api
import {addCityFav} from '../../api/weather'

//Estilos
import './CountryInfo.scss';


export default function CountryInfo(props){
    const {city,country,description,humidity,temperature,wind,user} = props
    const titulo = `Localización: ${city}, ${country}`
    const location = city+country;
    return(
        <div className="country-info">
            <Row className="country-info__container" >
                <Col span={8}/>
                    <Col className="country-info__container__details"span={8}>
                        <Link to="/app/country"> 
                            <Card title={titulo} className="country-info__container__details inter">
                                <p><img src={placeholder}/> Ubicación: {city}, {country}</p>
                                <p><img src={temperatureIcon}/> Temperatura: {temperature} ℃, {description}</p>
                                <p><img src={foggy}/> Humedad: {humidity}</p>
                                <p><img src={windIcon}/>Velocidad del viento: {wind}</p>
                            </Card>
                        </Link>
                        <Favorite user={user} location={location}/>
                    </Col>
               
                <Col span={8}/>
            </Row>
        </div>
    );
}

function Favorite(props){
    console.log(props);
    const {user,location} = props;
    const [data,setData] = useState({
        user: "",
        location: ""
    });
    const favorite = () =>{
        if(!location || location == null){
           notification['error']({message:"Ingrese una ciudad y un país"})
        }else{
            setData({...data,user:user})
            setData({...data,location:location})
            addCityFav(data);
            console.log(data)
        }
    }
    
    return(
        <div className="button-fav">
            <Button onClick={favorite} >
             <HeartTwoTone twoToneColor="#eb2f96" />
            </Button>
        </div>
        

    );
}