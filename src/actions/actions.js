const ADD_POKEMON = 'ADD_POKEMON';

const addPokemon = pokemon => ({
  type: ADD_POKEMON,
  payload: pokemon,
});

export {
  ADD_POKEMON, addPokemon,
};
