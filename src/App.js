import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {useNavigate,Route,Routes} from 'react-router-dom';
import  AnimeInfo  from './AnimeInfo';
import Anime from './Anime';

function App(){
 
  
const navigate=useNavigate()

  
  return(
    <div>
    
      <button className='button' onClick={()=>navigate('/anime')}>Home</button>
    
<Routes>
<Route path="/anime/:id" element={<AnimeInfo />} />
<Route path="/anime" element={<Anime />} />

</Routes>
{/* <Anime/> */}
    </div>
  )

}
export default App;


