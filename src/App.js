import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Favorites from '../src/Favorites'
function App() {
  return (
    <div className="App">
        
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Favorites" element={<Favorites/>} />
    </Routes>
    </div>
  );
}

export default App;
