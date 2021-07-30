const ADD_POKEMON = 'ADD_POKEMON';
const CHANGE_FILTER = 'CHANGE_FILTER';

const addPokemon = pokemon => ({
  type: ADD_POKEMON,
  payload: pokemon,
});

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});


export {
  ADD_POKEMON, addPokemon, CHANGE_FILTER, changeFilter,
};
