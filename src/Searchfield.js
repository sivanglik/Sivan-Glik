import { useState,useEffect } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import apiData from "./apiData";


export const Searchfield = () =>
{

    const [City,setCity] = useState();
    

        const getCityKey = async  ()=>{
        let resp = await apiData.autoComplete()

        }
       

    
  
return (
    <div>
            <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
          onChange={(e)=>setCity(e.target.value)}
        />
        <Button variant="contained" onClick={getCityKey}>Serach</Button>

    </div>
)
}