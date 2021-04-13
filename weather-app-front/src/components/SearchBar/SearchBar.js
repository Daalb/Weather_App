//Liberías
import React,{useState} from 'react';
import {Input,Button,Form} from 'antd';
import { CompassOutlined, GlobalOutlined, SearchOutlined  } from '@ant-design/icons';

//Estilos
import './SearchBar.scss';

export default function SearchBar(){
    const [inputs,setInputs] = useState({
        city:"",
        country: ""
    });
    return(
        <div className="search-bar">
            <Form>
                <Form.Item>
                    <Input className ="search-bar__input" 
                        size="large" 
                        placeholder="Ciudad" 
                        prefix={<CompassOutlined />}
                    />
                </Form.Item>
                
                <Form.Item>
                    <Input className ="search-bar__input" 
                        size="large" 
                        placeholder="País"
                        prefix={<GlobalOutlined />}
                    />
                </Form.Item>
               
                <Button className="search-bar__button">
                <SearchOutlined />
                </Button>
            </Form>
        </div>
    );
}