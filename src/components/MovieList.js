import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {            /*  a functional component MovieList that receives an array of movies as a prop movies and renders a list of MovieCard components.   */
  return (
    <div className="movie-list">
      {movies.map((movie) => (                /* The movies.map() method is used to iterate through each movie in the movies array and create a new MovieCard component for each one. The key prop is set to the id property of each movie to ensure that each MovieCard component has a unique identifier   */ 
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
