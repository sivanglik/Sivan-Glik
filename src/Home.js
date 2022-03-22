import './App.css';
import Layout from './Layout';
import apiData from './apiData'
import {useEffect,useState} from 'react'
import Weather from './Weather';
import { Searchfield } from './Searchfield';
import WeatherText from './WeatherText'


function Home() {

    const deafultCity = "Tel Aviv";
    let defaultKey = 215854;
    const [cityWeather,setcityWeather] = useState('')
    
 

  return (
    
 

    <Layout>
                
           

                
              <Weather defaultKey={defaultKey} deafultCity={deafultCity}/>
              
           
           
    </Layout>
    
    
  );
}

export default Home;
