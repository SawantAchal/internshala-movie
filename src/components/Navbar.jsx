import React, { useState, useEffect } from 'react';

const Navbar = ({ movies, onFilterChange, onClearFilters }) => {
  const [languageFilter, setLanguageFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');

  const languages = [...new Set(movies.flatMap(movie => movie.movielanguages))];
  const countries = [...new Set(movies.flatMap(movie => movie.moviecountries))];
  const genres = [...new Set(movies.flatMap(movie => movie.moviegenres))];

  const handleLanguageChange = (e) => {
    const language = e.target.value;
    setLanguageFilter(language);
    applyFilter(language, countryFilter, genreFilter);
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setCountryFilter(country);
    applyFilter(languageFilter, country, genreFilter);
  };

  const handleGenreChange = (e) => {
    const genre = e.target.value;
    setGenreFilter(genre);
    applyFilter(languageFilter, countryFilter, genre);
  };

  const applyFilter = (language, country, genre) => {
    const filteredMovies = movies.filter(movie => {
      return (
        (language === '' || movie.movielanguages.includes(language)) &&
        (country === '' || movie.moviecountries.includes(country)) &&
        (genre === '' || movie.moviegenres.includes(genre))
      );
    });
    onFilterChange(filteredMovies);
  };

  const clearFilters = () => {
    setLanguageFilter('');
    setCountryFilter('');
    setGenreFilter('');
    onClearFilters();
  };

  useEffect(() => {
    // Clear filters when the component mounts (page refresh)
    clearFilters();
  }, []);

  return (
    <nav  className="bg-gradient-to-r from-zinc-900 to-red-700  p-4 fixed w-full cursor-pointer">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <h1 className="text-white text-lg font-bold mb-2 lg:mb-0">Movie Filter</h1>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col lg:flex-row">
              {/* Language filter */}
              <select value={languageFilter} onChange={handleLanguageChange} className="p-2 rounded-md bg-transparent text-white focus:outline-none mb-2 lg:mb-0 lg:mr-2 border border-black">
                <option value="" className='bg-slate-500'>All Languages</option>
                {languages.map(language => (
                  <option key={language} value={language} className='bg-slate-500'>
                    {language}
                  </option>
                ))}
              </select>
              {/* Country filter */}
              <select value={countryFilter} onChange={handleCountryChange} className="p-2 rounded-md bg-transparent text-white focus:outline-none mb-2 lg:mb-0 lg:mr-2 border border-black">
                <option value="" className='bg-slate-500'>All Countries</option>
                {countries.map(country => (
                  <option key={country} value={country} className='bg-slate-500'>
                    {country}
                  </option>
                ))}
              </select>
              {/* Genre filter */}
              <select value={genreFilter} onChange={handleGenreChange} className="p-2 rounded-md bg-transparent text-white focus:outline-none mb-2 lg:mb-0 lg:mr-2 border border-black">
                <option value="" className='bg-slate-500'>All Genres</option>
                {genres.map(genre => (
                  <option key={genre} value={genre} className='bg-slate-500'>
                    {genre}
                  </option>
                ))}
              </select>
              <button className='className="px-4 py-2  text-white rounded-md transition-colors border border-black  focus:outline-none lg:ml-2 p-1' onClick={clearFilters}>Clear Filters</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
