import React from 'react';
import { movies } from '../data';
import { move } from 'superagent';

const Movies = () => {

  const renderMovies = () => {
    return movies.map( movie => (<div>
      <h4>{movie.title}</h4>
      <p>Time: {movie.time}</p>
      <ul>
        {movie.genres.map(genre => (<li>{genre}</li>))}
      </ul>
    </div>))
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
