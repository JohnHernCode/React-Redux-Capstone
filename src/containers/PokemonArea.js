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
      <img alt={poke} src={artUrl(id)} />
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
