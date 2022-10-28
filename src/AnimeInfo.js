import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function AnimeInfo() {
  const { id } = useParams();
  const [animedetail, setAnimedetail] = useState([]);
  const getAnime = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const resdata = await res.json();
    console.log(resdata.data)
    setAnimedetail(resdata.data);

  };
  useEffect(() => {getAnime()} , []);

  return (
    <div>
      <h1 className='animtitle'>{animedetail.title}</h1>
      <iframe width="100%"
             height="401" 
             src={animedetail?.trailer?.embed_url} 
             title="YouTube video player" frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowFullScreen></iframe>
             <div className='info'>
             <h2 className='animcontent'><span>Episode :</span>{animedetail.episodes}</h2><br/>
           <h2 className='animcontent'><span>Synopsis :</span>{animedetail.synopsis}</h2>
             </div>
      
    </div>
  );
}
