//Liberias
import React,{useEffect,useState} from 'react';

//Componentes
import CountryInfo from '../../components/CountryInfo';




//Funciones-Hooks
import useAuth from '../../hooks/useAuth';


//Api
import {getCurrentWeather} from '../../api/weather';
import {getDefaultCity} from '../../api/user';


//Estilos
import './Home.scss';

export default function Home(){
    const {user} = useAuth();
    const [algo,setAlgo] = useState([])
    const [results,setResults] = useState({
        city:"",
        country:"",
        description:"",
        humidity:"",
        temperature:"",
        wind: ""
    })

    
    useEffect(()=>{
        const a =getDefaultCity(user.sub)
    },[])  

    return(
        <h1>Pagina de Home</h1>
    );
}