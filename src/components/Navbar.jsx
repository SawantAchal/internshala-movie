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
    <nav className='h-16 bg-red-600 fixed w-full'>
      {/* Language filter */}
      <select value={languageFilter} onChange={handleLanguageChange}>
        <option value="">All Languages</option>
        {languages.map(language => (
          <option key={language} value={language}>{language}</option>
        ))}
      </select>

      {/* Country filter */}
      <select value={countryFilter} onChange={handleCountryChange}>
        <option value="">All Countries</option>
        {countries.map(country => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>

      {/* Genre filter */}
      <select value={genreFilter} onChange={handleGenreChange}>
        <option value="">All Genres</option>
        {genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>

      {/* Clear Filters button */}
      <button onClick={clearFilters}>Clear Filters</button>
    </nav>
  );
};

export default Navbar;
