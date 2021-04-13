//Liberias
import React,{ useState } from 'react';
import {Layout,Form,Button,Input} from 'antd';
import { CompassOutlined, GlobalOutlined, SearchOutlined  } from '@ant-design/icons';


//Componentes
//import SearchBar from '../../components/SearchBar';
import CountryInfo from '../../components/CountryInfo';

//Funciones-Hooks
import useAuth from '../../hooks/useAuth';


//Api
import {getCurrentWeather} from '../../api/weather';

//Estilos
import './Search.scss';

export default function Search(){
    const {user} = useAuth();   
    const {Header,Content} = Layout;
    const [results,setResults] = useState({
        city:"",
        country:"",
        description:"",
        humidity:"",
        temperature:"",
        wind: ""
    })

    const [inputs,setInputs] = useState({
        city:"",
        country: ""
    });


    const changeForm = e => {
        setInputs({...inputs,[e.target.name]:e.target.value});
    }

    const resetForm = () => {
        const inputs = document.getElementsByTagName('input');
        inputs[0].value = "";
      
        setInputs({
            city:"",
            country:""
        });

       
    }

    const search = async e => {
        const result = await getCurrentWeather(inputs);
        setResults({
            city: result.name,
            country: result.sys.country,
            description:result.weather[0].description,
            humidity:result.main.humidity,
            temperature:result.main.temp,
            wind: result.wind.speed
        })
        // resetForm();
    }
   

    return(
        <Layout>
            <Layout className="layout-search">
                <Header className="layout-search__header"> 
                    <div className="search-bar">
                        <Form className="search-bar__form" onFinish={search} onChange={changeForm}>
                            <Form.Item>
                                <Input className ="search-bar__input" 
                                    size="large" 
                                    placeholder="Ciudad" 
                                    name="city"
                                    prefix={<CompassOutlined />}
                                    value={inputs.value}
                                />
                                </Form.Item>

                                <Form.Item>
                                <Input className ="search-bar__input" 
                                    size="large" 
                                    placeholder="País"
                                    name="country"
                                    prefix={<GlobalOutlined />}
                                    value={inputs.value}
                                />
                                </Form.Item>

                                <Form.Item>
                                    <Button htmlType="submit" className="search-bar__button">
                                        <SearchOutlined />
                                    </Button>
                            </Form.Item>

                        </Form>
                    </div>
                </Header>
                <Content className="layout-search__content">
                    <CountryInfo
                        city={results.city}
                        country={results.country}
                        description={results.description}
                        humidity={results.humidity}
                        temperature={results.temperature}
                        wind={results.wind}
                        user={user.sub}
                    
                    />
                </Content>
            </Layout>
           
        </Layout>
    );

}