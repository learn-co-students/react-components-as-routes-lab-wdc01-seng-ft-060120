import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul>
      <li><NavLink
        to="/"
        exact
        activeStyle={{
          color: 'purple'}
        }
      >Home</NavLink></li>
      <li><NavLink
        to="/movies"
        exact
        activeStyle={{
          color: 'purple'}
        }
      >Movies</NavLink></li>
      <li><NavLink
        to="/directors"
        exact
        activeStyle={{
          color: 'purple'}
        }
      >Directors</NavLink></li>
      <li><NavLink
        to="/actors"
        exact
        activeStyle={{
          color: 'purple'}
        }
      >Actors</NavLink></li>
      </ul>

    </div>
  );
};

export default NavBar;
