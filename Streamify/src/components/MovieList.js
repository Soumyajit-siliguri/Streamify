import React from 'react';
import './MovieList.css'; // Make sure to import the CSS file

const MovieList = ({ movies, searchPerformed }) => {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
            <div className="movie-details">
              <h3 className="movie-title">{movie.Title}</h3>
              <p className="movie-year">{movie.Year}</p>
              <p className="movie-rating">Rating: {movie.imdbRating || 'N/A'}</p>
            </div>
          </div>
        ))
      ) : (
        searchPerformed && <p className="no-movies">No movies found</p>
      )}
    </div>
  );
};

export default MovieList;
