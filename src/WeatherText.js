import { useState,useEffect } from "react"
import apiData from "./apiData";
import Weather from "./Weather";

const WeatherText = ({defaultKey}) =>
{

    const [weatherText,setweatherText] = useState("");
    
    useEffect( ()=>{

      const getWwatherText = async  () =>{
          let resp = await apiData.currentWeather(defaultKey)
          setweatherText(resp[0].WeatherText)
      }
          getWwatherText();
   },[defaultKey])

return (
    <div>
            
      <p>{weatherText}</p>
     
    </div>
)
}

export default WeatherText