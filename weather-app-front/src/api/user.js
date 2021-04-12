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
    console.log(data);
    return fetch(url,params)
    .then(response => {
        return response.json();
    })
    .then(result => {
        return result;
    })
    .catch(err =>{
        return err;
    });
};
