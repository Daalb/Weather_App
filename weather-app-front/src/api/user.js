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
