import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const MovieDetail = ({movies}) => {
  const navigate = useNavigate()
  const {imdbmovieid} = useParams();
  const movie = movies.find(movie => movie.imdbmovieid === imdbmovieid)

  if(!movie) {
    return <div>Movie not found</div>
  }
  return (
    <div className='cursor-pointer pt-20'>
      <h2>{movie.movietitle}</h2>
      <img src={movie.moviemainphotos} alt={movie.movietitle} />
      <p>IMDb ID: {movie.imdbmovieid}</p>
      <p>Languages: {movie.movielanguages.join(', ')}</p>
      <p>Countries: {movie.moviecountries.join(', ')}</p>
      <p>Genres: {movie.moviegenres.join(', ')}</p>
      <button onClick={() => navigate('/')}>back to movies</button>
    </div>
  )
}

export default MovieDetail