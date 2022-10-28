import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {useNavigate,Route,Routes} from 'react-router-dom';
import  AnimeInfo  from './AnimeInfo';
import Anime from './Anime';

// import { useEffect, useState } from 'react';

// function App() {

//   const [product,setProduct]=useState([]);
//   const getproduct=()=>{
//     fetch("https://fakestoreapi.com/products")
//     .then((data)=>data.json())
//     .then((nm)=>setProduct(nm));
//   };
//    useEffect(()=>getproduct(),[]);
//    const filtercat=(catItem)=>{
//     const result= product.filter((pt)=>{
//      return pt.category===catItem;
//     });
//     setProduct(result);
//    }
  
//   return (
//     <div >
//       <h1 className='heading'>products</h1>
      
//       <button onClick={()=>filtercat("men's clothing")}>Men</button>
//       <button onClick={()=>filtercat("women's clothing")}>Women</button>
//       <button onClick={()=>filtercat("jewelery")}>Jewellery</button>
//       <button onClick={()=>filtercat("electronics")}>Electronics</button>
//       <div className='products'>
//       { product.map((pt)=>(<Products product={pt}/>))}
//       </div>
     
//     </div>
//   );
// }

// export default App;

// function Products({product}){

//   return(
   
//     <div className='container'>
//      <h2 className='title'>{product.title}</h2>
//      <img className='image' src={product.image}></img>
//      <h3>Rs{product.price}/-</h3>
//      <h4>{product.category}</h4>
//     </div>
//   )
// }



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


