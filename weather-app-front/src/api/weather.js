import { keyApiWeather,apiWeatherUrl} from './config';

export function getCurrentWeather(data){
    console.log(data);
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