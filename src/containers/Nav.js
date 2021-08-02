import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
      <>
        <span>
          <h2>Pokemon Pokédex</h2>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
        </span>
      </>
  );
}

export default Navbar;
