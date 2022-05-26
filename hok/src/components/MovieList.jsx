import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movie}) => {
  return (
    <div className="container">
    <div className="column is-one-quarter">
        {
            movie.map(el => 
                
                <MovieCard el={el} key={el.id} />
                )
        }
    </div>
    </div>
  )

}

export default MovieList ;