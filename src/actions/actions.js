const ADD_POKEMON = 'ADD_POKEMON';
const CHANGE_FILTER = 'CHANGE_FILTER';
const CATEGORY_POKEMON = 'CATEGORY_POKEMON';

const addPokemon = pokemon => ({
  type: ADD_POKEMON,
  payload: pokemon,
});

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

const categoryPokemon = catPokemon => ({
  type: CATEGORY_POKEMON,
  payload: catPokemon,
});


export {
  ADD_POKEMON, addPokemon, CHANGE_FILTER, changeFilter, CATEGORY_POKEMON, categoryPokemon
};
