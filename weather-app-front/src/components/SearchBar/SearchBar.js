//Liberías
import React,{useState} from 'react';
import {Input,Button,Form} from 'antd';
import { CompassOutlined, GlobalOutlined, SearchOutlined  } from '@ant-design/icons';

//Api
import {getCurrentWeather} from '../../api/weather';

//Estilos
import './SearchBar.scss';

export default function SearchBar(){
    const [inputs,setInputs] = useState({
        city:"",
        country: ""
    });
    
    const changeForm = e => {
        setInputs({...inputs,[e.target.name]:e.target.value});
    }

    const resetForm = e => {
        const input = document.querySelector(".ant-input");
        console.log(input);
        input.value = "";
        setInputs({
            city:"",
            country:""
        });
    }

    const search = async e => {
        const result = await getCurrentWeather(inputs);
        console.log(result);
        resetForm();
    }

    return(
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
    );
}