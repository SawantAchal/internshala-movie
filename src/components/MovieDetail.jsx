import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const navigate = useNavigate();
  const { imdbmovieid } = useParams();
  const movie = movies.find(movie => movie.imdbmovieid === imdbmovieid);

  if (!movie) {
    return <div className="pt-20">Movie not found</div>;
  }

  return (
    <div className="container mx-auto px-4 md:pt-24 pt-64 md:h-screen h-full text-white  ">
      <h2 className="text-4xl font-semibold mb-4 text-center ">{movie.movietitle}</h2>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 lg:mr-10 h-[35rem] w-64">
          <img src={movie.moviemainphotos} alt={movie.movietitle} className="w-full mb-4 h-full"/>
        </div>
        <div className="lg:w-1/2 lg:ml-10">
          <div className="mb-2">
            <p className='text-xl'>Languages:</p>
            <div className="flex flex-wrap pt-3">
              {movie.movielanguages.map(language => (
                <div key={language} className="border rounded-md p-1 mr-2 mb-2">
                  {language}
                </div>
              ))}
            </div>
          </div>
          <div className="mb-2">
            <p className='text-2xl'>Countries:</p>
            <div className="flex flex-wrap pt-3">
              {movie.moviecountries.map(country => (
                <div key={country} className="border rounded-md p-1 mr-2 mb-2">
                  {country}
                </div>
              ))}
            </div>
          </div>
          <div className="mb-2">
            <p className='text-2xl'>Genres:</p>
            <div className="flex flex-wrap pt-3">
              {movie.moviegenres.map(genre => (
                <div key={genre} className="border rounded-md p-1 mr-2 mb-2">
                  {genre}
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => navigate('/')} className="px-4 py-2  text-white rounded-md transition-colors  focus:outline-none mb-8 bg-gradient-to-r from-gray-900 to-red-700 hover:bg-gradient-to-r hover:from-red-700 hover:to-gray-900">
            Back to Movies
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
