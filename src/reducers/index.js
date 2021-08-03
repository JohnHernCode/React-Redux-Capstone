import { combineReducers } from 'redux';
import pokeReducer from './pokemon';
import filterReducer from './filter';
import catReducer from './category';

const rootReducer = combineReducers({
  pokes: pokeReducer,
  filter: filterReducer,
  categoryPokemon: catReducer,
});

export default rootReducer;
