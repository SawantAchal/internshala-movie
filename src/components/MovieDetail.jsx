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
    <div className="container mx-auto px-4 pt-20 h-screen">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 lg:mr-10 h-[35rem] w-64">
          <img
            src={movie.moviemainphotos}
            alt={movie.movietitle}
            className="w-full mb-4 h-full"
          />
        </div>
        <div className="lg:w-1/2 lg:ml-10">
          <h2 className="text-3xl font-semibold mb-4">{movie.movietitle}</h2>
          <p>IMDb ID: {movie.imdbmovieid}</p>
          <div className="mb-2">
            <p>Languages:</p>
            <div className="flex flex-wrap">
              {movie.movielanguages.map(language => (
                <div key={language} className="border rounded-md p-1 mr-2 mb-2">
                  {language}
                </div>
              ))}
            </div>
          </div>
          <div className="mb-2">
            <p>Countries:</p>
            <div className="flex flex-wrap">
              {movie.moviecountries.map(country => (
                <div key={country} className="border rounded-md p-1 mr-2 mb-2">
                  {country}
                </div>
              ))}
            </div>
          </div>
          <div className="mb-2">
            <p>Genres:</p>
            <div className="flex flex-wrap">
              {movie.moviegenres.map(genre => (
                <div key={genre} className="border rounded-md p-1 mr-2 mb-2">
                  {genre}
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => navigate('/')} className="px-4 py-2 bg-blue-500 text-white rounded-md transition-colors hover:bg-blue-600 focus:outline-none"
          >
            Back to Movies
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
