import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Layout from './Layout';
import {useDispatch,useSelector} from 'react-redux'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
function Favorites() {

  const favorites = useSelector(state=>state)
  const dispatch = useDispatch();

  const DeleteFromFav = (CityName) =>
  {
    dispatch({type:"DELETE_ FROM_FAVORITES" , payload: CityName})
  }

  return (
    <Layout>

            
              <Box  style={{ display: 'flex',flexWrap: 'wrap',
              alignContent: 'flex-end',margin:80 }}>
              { favorites.map((item,index)=>{
                return <Paper key={index} className='fav_paper' style={{margin:20, height:"150px", width:"210px" ,display:"flex",flexDirection:"column", 
                justifyContent:"space-evenly",alignItems: 'center' ,backgroundColor:' rgb(172, 179, 179)',
                boxShadow: '0px 0px 3px rgb(136, 133, 133)'}}>
                          <Box>
                            <Box>
                              {item.city} 
                            </Box>
                              {item.weatherinfo.min} 
                          </Box>
                          {item.weatherinfo.weatherType} 
                          <button onClick={()=>DeleteFromFav(item.city)}>Delete</button>
                      </Paper>
                                  
                     
              })
            }
               </Box  >
            

    </Layout>
  );
}

export default Favorites;
