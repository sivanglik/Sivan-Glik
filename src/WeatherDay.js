import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import apiData from './apiData'
import { useState,useEffect } from 'react';
import Weather from './Weather';

const WeatherDay = ({min,max,weatherImg}) =>
{

    const [weatherText,setweatherText] = useState();
    const [Celcius,setCelcius] = useState(false);

  const ChangeToCelcius = (val) =>
  {
     return Math.floor((val-32)/1.8);
  }
   
 
  return(
    <div className="weatherday">
           <p>{weatherText}</p> 
        <div><img alt={weatherImg} src={`https://developer.accuweather.com/sites/default/files/${weatherImg}-s.png`}/></div>
        <div>Temp : {Celcius ? <div> {ChangeToCelcius(min)} / {ChangeToCelcius(max)}</div> : <div>{min} / {max}</div>}</div>
        <button onClick={()=>setCelcius(!Celcius)}>Celcius</button>
    </div>
  )
}

export default WeatherDay;


