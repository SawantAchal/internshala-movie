import React from 'react'
import MovieData from '../data/MovieData'
import MovieItem from './MovieItem'

const MovieList = () => {
  return (
    <div>
      {
        MovieData.map((movie , index) => (
          <MovieItem key={index} movie={movie} />
        ))
      }
    </div>
  )
}

export default MovieList