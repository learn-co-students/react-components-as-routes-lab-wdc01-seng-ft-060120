import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        <ul>
          {movies.map(movie => 
            <div>
              {movie.title}, {movie.time}, {movie.genres}
            </div>
          )}
        </ul>
    </div>
  );
};

export default Movies;
