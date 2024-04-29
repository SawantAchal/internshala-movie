import './App.css';
import MovieList from './components/MovieList';
import { useState } from 'react';
import MovieData from './data/MovieData'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';
import Navbar from './components/Navbar';

function App() {
  const [movies, setMovies] = useState(MovieData);

  const handleFilterChange = (filteredMovies) => {
    setMovies(filteredMovies);
  };

  const handleClearFilters = () => {
    // Reset all filters
    setMovies(MovieData);
  };


  return (
    <>
      <BrowserRouter>
      <Navbar movies={movies} onFilterChange={handleFilterChange} onClearFilters={handleClearFilters}/>
        <Routes>
        <Route path='/' element={<MovieList movies={movies}/>}/>
          <Route path='/movie/:imdbmovieid' element={<MovieDetail movies={MovieData}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
