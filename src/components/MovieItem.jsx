import React from 'react'
import { useNavigate } from 'react-router-dom';

const MovieItem = ({movie}) => {
    const { movietitle , imdbmovieid, moviemainphotos} = movie;
    const navigate = useNavigate()

    const handleClick = () => {
      navigate(`/movie/${imdbmovieid}`)
    }
  return (
    <div className="movie-item" onClick={handleClick}>
      <img src={moviemainphotos} alt={movietitle} />
      <div>
        <h2>{movietitle}</h2>
      </div>
    </div>
  )
}

export default MovieItem