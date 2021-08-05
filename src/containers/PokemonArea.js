import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './pokemonarea.module.css';
import { artUrl } from '../api/request';

const PokemonListing = ({ poke, url, id }) => {
  function capitalizeLetters(string) {
    return string.toUpperCase();
  }

  return (
    <div className={style.column}>
      <Link className={style.text} to={{ pathname: `/pokemon/${poke}`, state: { poke, url, id } }}>{capitalizeLetters(poke)}</Link>
      <img
        alt={poke}
        src={artUrl(id)}
        onError={(e) => {
          e.target.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/d41c408f7e5be9848260f470e34069c264091a69/sprites/pokemon/0.png';
        }}
      />
    </div>
  );
};

PokemonListing.propTypes = {
  poke: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string,
};

PokemonListing.defaultProps = {
  id: PropTypes.string,
};

export default PokemonListing;
