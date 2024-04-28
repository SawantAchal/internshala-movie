import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = ({movies}) => {
  const {imdbmovieid} = useParams();
  const movie = movies.find(movie => movie.imdbmovieid === imdbmovieid)

  if(!movie) {
    return <div>Movie not found</div>
  }
  return (
    <div>
      <h2>{movie.movietitle}</h2>
      <img src={movie.moviemainphotos} alt={movie.movietitle} />
      <p>IMDb ID: {movie.imdbmovieid}</p>
      <p>Languages: {movie.movielanguages.join(', ')}</p>
      <p>Countries: {movie.moviecountries.join(', ')}</p>
      <p>Genres: {movie.moviegenres.join(', ')}</p>
    </div>
  )
}

export default MovieDetail