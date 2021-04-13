import { keyApiWeather,apiWeatherUrl,basePath,apiVersion} from './config';

export function getCurrentWeather(data){
    const {city,country} = data;
    const url = `${apiWeatherUrl}${city},${country}&appid=${keyApiWeather}&units=metric`;
   
   return fetch(url)
    .then(response => {
        return response;
    })
    .then(result => {
        return result.json();
    })
    .catch(err =>{
        return err;
    })

}



export function addCityFav(data){
    const url = `${basePath}/${apiVersion}/add-fav`;
    console.log(JSON.stringify(data));
    const params = {
        method: 'POST',
        body: JSON.stringify(data),
        header: {
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

}