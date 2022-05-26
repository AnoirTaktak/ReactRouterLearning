import React from 'react'
import { Link } from 'react-router-dom';
import Stars from './Stars';



const MovieCard = ({el}) => {
  return (
    
    <Link to={'/'+el.id}> <div className="columns is-multiline p-0 pt-6 last">
             <h3 style={{color:'white'}}>{el.MovieName}</h3>
             <Stars x={el.Rating} />
             <img src={el.ImageSrc} alt='hi' style={{height:'200px', width:'200px'}}/>
            
        </div></Link>
    
  )
}

export default MovieCard