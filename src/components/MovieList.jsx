import React, { useEffect, useState } from 'react';
import MovieItem from './MovieItem'
import { useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    // Parse query parameters from the URL
    const searchParams = new URLSearchParams(location.search);
    const languageFilter = searchParams.get('language');
    const countryFilter = searchParams.get('country');
    const genreFilter = searchParams.get('genre');

    // Filter movies based on the query parameters
    const filtered = movies.filter(movie => {
      return (
        (!languageFilter || movie.movielanguages.includes(languageFilter)) &&
        (!countryFilter || movie.moviecountries.includes(countryFilter)) &&
        (!genreFilter || movie.moviegenres.includes(genreFilter))
      );
    });

    // Update the state with filtered movies
    setFilteredMovies(filtered);
  }, [location.search, movies]);

  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 bg--300 p-9 gap-4 text-center pt-20'>
      {
        filteredMovies.map((movie , i) => (
          <MovieItem key={i} movie={movie}/>
        ))
      }
    </div>
  )
}

export default MovieList