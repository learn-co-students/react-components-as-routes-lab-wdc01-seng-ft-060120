import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1> Movies Page </h1>
        { movies.map( m => 
          <div>
            <h3> Title: {m.title} </h3>
            <h3> Time: {m.time} </h3>
            <ul>
              { m.genres.map( g => <li>{g}</li>)}
            </ul>
          </div>
          )
        }
    </div>
  );
};

export default Movies;
