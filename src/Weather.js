import './App.css';
import apiData from './apiData'
import { useState,useEffect } from 'react';
import WeatherDay from './WeatherDay';
import axios from 'axios';
import Layout from './Layout';
import WeatherText from './WeatherText';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {useDispatch,useSelector} from 'react-redux'
import FavoriteIcon from '@mui/icons-material/Favorite';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()
function Weather({defaultKey,deafultCity}) {

  const [weatherInfo,setweatherInfo] = useState();
  const [key,setkey]= useState('')
  const [City,setCity] = useState('')
  const [query,setquery] = useState('')
  const favorites = useSelector(state=>state)
  const dispatch = useDispatch();
  const apikey = apiData.key;
  const [checkFav,setcheckFav] = useState();

  const AddToFav = () => // Add to Favorites
  {
      dispatch({type:"ADD_TO_FAVORITES" , payload:{weatherinfo: weatherInfo[0], city : City ? City : deafultCity}})
      setcheckFav(true)
  }

  const getCityKey = async (evnt) => //check English Letters
  {
      
        if(evnt.key === "Enter" )
        {
        setCity(query);
        }
          else if ( /[^a-zA-Z]/.test(query))
          {
            toast.warn('English Letters Only', {
             position : toast.POSITION.TOP_RIGHT
          })
            setquery(deafultCity)
            setCity(deafultCity);
          }

  }
  const checkNum = (num) => 
  {
     const string  = num +'';
     const stringLen = string.length
     if(stringLen === 1)
       return '0' + string ;
      else
        return string
  }

  useEffect(()=>{
      
    const lowercased = favorites.map(x => x.city.toLowerCase());
    let result = lowercased.includes(City)
    setcheckFav(result)
  },[favorites,City])

  useEffect(()=>{ //Fetching City's key

      const getKey = async () =>
      {
        if(City)
        {
        let resp = await apiData.autoComplete(City);
        setkey(resp[0].Key)
        }
      }
      getKey();
  },[City])

  useEffect(async ()=>{ //Fetching City's 5 days weather
         
             let resp = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key?key:defaultKey}?apikey=${apikey}`)
              setweatherInfo(resp.data.DailyForecasts.map(item=>{
                return{
                     weatherImg : checkNum(item.Day.Icon),
                     min: item.Temperature.Minimum.Value,
                      max : item.Temperature.Maximum.Value,
                      weatherType:item.Day.IconPhrase,

              }
              
            }));
           

      },[key])
      
  
  
  return (
   <div >
                
                <Box sx={{paddingTop : 5}}>
                   <input className='search' type="text"  placeholder="Search..." onChange={e=>setquery(e.target.value)}  
                   onKeyPress={getCityKey}/>
               </Box>
      <Container sx={{paddingTop : 5 }}>

     
        <Box sx={{ backgroundColor: '#cfe8fc', height: '70vh' ,border:"2px solid black" }}>

            <Box style={{display:"flex", justifyContent:'space-evenly' ,paddingTop:30}}>


                <Box>
                    <p className='cityName'>{City ? City : deafultCity}</p>
                    
                </Box>    
                
                <Box >
                     <FavoriteIcon fontSize="large"  style={{ marginRight: '15px',color : checkFav ? 'red' : null}}/>
                    <button className='fav-btn' onClick={AddToFav}>Add To Favoites</button>
                    
                    
                </Box>
               
            </Box>

                    <Box style={{paddingTop:50, fontSize:50,fontWeight:'bold'}}>
                        <WeatherText defaultKey={key ? key : defaultKey} />
                    </Box>
                    
                
                <Box style={{display:'flex', justifyContent:'center',paddingTop:30}}>
                    {
                    weatherInfo ? weatherInfo.map((i,index)=>{
                      return <div key={index}>
                      <WeatherDay min={i.min} max={i.max} weatherType={i.weatherType} weatherImg={i.weatherImg} defaultKey={defaultKey}/>
                      </div>
                      }) : null
                    }
                </Box>

       
                   
                
          
        </Box>
    
      
      
      </Container>
   </div>
       
  );
}


export default Weather;


