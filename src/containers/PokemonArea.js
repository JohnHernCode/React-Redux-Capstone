import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PokemonListing = ({ poke, url }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
      <Link to={{ pathname: `/pokemon/${poke}`, state: { poke, url } }}>{capitalizeFirstLetter(poke)}</Link>
  );
};

PokemonListing.propTypes = {
  poke: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PokemonListing;
