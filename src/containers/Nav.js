import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
      <>
        <h2>Pokemon Pokédex</h2>
        <div>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
        </div>
      </>
  );
}

export default Navbar;
