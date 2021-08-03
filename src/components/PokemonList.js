import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import PokemonListing from '../containers/PokemonArea';
import CategoryFilter from './CategoryFilter';
import { changeFilter, addPokemon, categoryPokemon } from '../actions/actions';
import { allPokemon, pokemonByCategory } from '../api/request';
import style from './pokemonlist.module.css';

const PokemonList = ({
  filter,
  changeFilter,
  pokes,
  categorizedPokes,
  addPokemon,
  categoryPokemon,
}) => {
  const handleFilterChange = (filter) => {
    changeFilter(filter);
  };

  useEffect(async () => {
    if (pokes.length === 0) {
      const allPokes = await allPokemon();
      addPokemon(allPokes);
    }
  }, []);

  useEffect(async () => {
    if (categorizedPokes.length === 0) {
      const catPokes = pokemonByCategory();
      categoryPokemon(catPokes);
    }
  }, []);

  const renderAll = (pokemon) => (
    <div>
      {pokemon.map((poke) => (
        <PokemonListing
          poke={poke.name}
          url={poke.url}
          id={poke.url.match(/\/(\d+)\//gi)[0].replaceAll('/', '')}
          key={poke.name}
        />
      ))}
    </div>
  );

  const renderCat = (pokemon, filter) => (
    <div>
      {pokemon[filter - 1].map((name) => (
        <PokemonListing
          poke={name.pokemon.name}
          url={name.pokemon.url}
          id={name.pokemon.url.match(/\/(\d+)\//gi)[0].replaceAll('/', '')}
          key={name.pokemon.name}
        />
      ))}
    </div>
  );

  const pokeRender = filter[0] === 0 || filter[0] === 'All' ? renderAll(pokes) : renderCat(categorizedPokes[0], filter);

  return (
    <>
      <div className={style.catDiv}>
        <CategoryFilter
          clickHandler={handleFilterChange}
          filter={filter}
        />
      </div>
      <div className={style.pokeDiv}>
        {pokeRender}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  pokes: state.pokes,
  filter: state.filter,
  categorizedPokes: state.categoryPokemon,
});

PokemonList.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.any).isRequired,
  pokes: PropTypes.arrayOf(PropTypes.any).isRequired,
  categorizedPokes: PropTypes.arrayOf(PropTypes.any).isRequired,
  changeFilter: PropTypes.func.isRequired,
  addPokemon: PropTypes.func.isRequired,
  categoryPokemon: PropTypes.func.isRequired,
};

const mapDispatch = {
  changeFilter,
  addPokemon,
  categoryPokemon,
};

export default connect(mapStateToProps, mapDispatch)(PokemonList);
