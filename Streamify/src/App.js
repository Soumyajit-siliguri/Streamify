import React, { useState } from 'react';
import { fetchMovies } from './services/movieService';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = async (query) => {
    setSearchPerformed(true); // Indicate that a search has been performed
    try {
      const data = await fetchMovies(query);
      setMovies(data.Search || []);
    } catch (error) {
      setMovies([]);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Movie App</h1>
      <h4 className="app-subtitle">by Soumyajit Sinha</h4>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} searchPerformed={searchPerformed} />
    </div>
  );
};

export default App;
