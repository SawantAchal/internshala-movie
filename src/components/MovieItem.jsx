import React from 'react'
import { useNavigate } from 'react-router-dom';

const MovieItem = ({movie}) => {
    const { movietitle , imdbmovieid, moviemainphotos} = movie;
    const navigate = useNavigate()

    const handleClick = () => {
      navigate(`/movie/${imdbmovieid}`)
    }
  return (
    <div className="movie-item flex items-center justify-center  flex-col cursor-pointer border border-white gap-6 text-center p-3 rounded-lg" onClick={handleClick}>
      <img src={moviemainphotos} alt={movietitle} className='text-center w-full rounded-lg'/>
        <h2 className='bg-transparent border border-white text-2xl w-full p-3 text-white rounded-lg'>{movietitle}</h2>
    </div>
  )
}

export default MovieItem