import { basePath, apiVersion} from './config';

export function addUserApi(data){
    const url = `${basePath}/${apiVersion}/add-user`;
    const params = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    return fetch(url,params)
    .then(response => {
        return response.json();
    })
    .then(result => {
        return result;
    })
    .catch(err =>{
        console.log(err)
        return err;
    });
};

export function getDefaultCity(data){
    const url =  `${basePath}/${apiVersion}/get-default-city?idGoogle=${data}`;
    const params = {
        method: 'GET',
        headers: {
            "Content-Type" : "application/json"
        }
        
    }
    fetch(url,params)
    .then(response=>{
        return response.json();
    })
    .then(result =>{
        // console.log(result.user[0]);
        return result;
    })
    .catch(err =>{
        return err;
    })
}
