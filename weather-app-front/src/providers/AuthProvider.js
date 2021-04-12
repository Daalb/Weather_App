//Liberias
import React,{useState,useEffect,createContext} from 'react';
import {getAccessTokenApi,logout} from '../api/auth';

export const AuthContext = createContext();

export default function AuthProvider(props){
    const {children} = props;
    const [user, setUser] = useState({
        user: null,
        isLoading: true
    });
    useEffect(()=>{
        checkUserLogin(setUser);
    },[])
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}


function checkUserLogin(setUser){
    const accessToken = getAccessTokenApi();

    //Si ha caducado o no existe
    if(!accessToken){   
        logout();
        setUser({
            user:null,
            isLoading: false
        });
    }else{//Si es valido
        setUser({
            isLoading: false,
            user: accessToken
        });
    }
}