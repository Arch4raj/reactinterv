
import { useNavigate,useParams } from "react-router-dom";
import { useEffect, useState  } from 'react';

export default function Anime(){
    const navigate = useNavigate();
      const {id}=useParams();
    const[animedata,setAnimeData]=useState([]);
  const [search,setSearch]=useState('');
  const getData=async()=>{
    const res=await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=24`)
    
    const resdata=await res.json();
    setAnimeData(resdata.data)
    console.log(resdata);
    }
  useEffect(()=>{getData()},[search]);

  const Handler=(event,id)=>{
   
    event.preventDefault();
    
    navigate(`/anime/${id}`)

  }

    return(
       <div>
        <div className="header">
       <h1>MyAnime</h1>
       <div className="search">
       <input type="search" placeholder='Search for anime' onChange={(e)=>setSearch(e.target.value)}></input>
       </div>
       
    </div>

    {/* <div>
      <button className='button'>Action</button>
    </div> */}

<div className="content" >
{animedata.map((anime,index)=>( <div className='card' key={index} onClick={(event)=>Handler(event,anime.mal_id)}>
         <h2 className='title'>{anime.title}</h2>
         <img src={anime.images.jpg.image_url}></img>
         <h2 className='rating'>{anime.rating}</h2>
        
         
         </div>))}
</div>

        
         
       </div>
     )
   }