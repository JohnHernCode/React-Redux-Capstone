import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import PokemonListing from '../containers/PokemonArea';
import CategoryFilter from './CategoryFilter';
import { changeFilter, addPokemon, categoryPokemon } from '../actions/actions';
import { allPokemons, pokemonByCategory } from '../api-requests/request';

const PokemonList = ({
                       filter,
                       changeFilter,
                       pokes,
                       categorizedPokes,
                       addPokemon,
                       categoryPokemon,
                     }) => {
  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  useEffect(async () => {
    if (pokes.length === 0) {
      const allPokes = await allPokemons();
      addPokemon(allPokes);
    }
  }, []);

  useEffect(async () => {
    if (categorizedPokes.length === 0) {
      const catPokes = await pokemonByCategory();
      categoryPokemon(catPokes);
    }
  }, []);

  const renderAll = pokemon => (
      <div>
        {pokemon.map(poke => (
            <PokemonListing poke={poke.name} url={poke.url} key={poke.name} />
        ))}
      </div>
  );

  const renderCat = (pokemon, filter) => (
      <div>
        {pokemon[filter - 1].map(name => (
            <PokemonListing
                poke={name.pokemon.name}
                url={name.pokemon.url}
                key={pokemon.name}
            />
        ))}
      </div>
  );

  const pokeRender = filter[0] === 0 || filter[0] === 'All' ? renderAll(pokes) : renderCat(categorizedPokes[0], filter);

  return (
      <div>
        <div>
          <CategoryFilter
              clickHandler={handleFilterChange}
              filter={filter}
          />
        </div>
        <div>
          {pokeRender}
        </div>
      </div>
  );
};

const mapStateToProps = state => ({
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
