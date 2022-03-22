import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import {useNavigate} from 'react-router-dom'

function Layout(props) {

const navigate = useNavigate();

  return (
    <div >
        <div className='header'>
            <div className='flex-header'>
                <h1>Herolo Weather Task</h1>
                 <div className='header-btn'>
                      <button onClick={()=>navigate('/')}>Home</button>
                      <button onClick={()=>navigate('/Favorites')}>Favorites</button>
                 </div>
                    
                
                
             </div>
            
      </div>
        <div className='content'>
          {props.children}
        </div>
    
    </div>
  );
}

export default Layout;
