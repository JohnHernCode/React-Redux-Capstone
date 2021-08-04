import { allPokemon, pokemonByCategory, fetchPokeData } from '../api/request';

describe('Test the API requests', () => {
  test('allPokemon is working and returns an object', async () => {
    const data = await allPokemon();
    expect(typeof data).toBe('object');
  });

  test('pokemonByCategory is working and returns an object', async () => {
    const data = await pokemonByCategory();
    expect(typeof data).toBe('object');
  });

  test('fetchPokeData is working and returns an object', async () => {
    const data = await fetchPokeData();
    expect(typeof data).toBe('object');
  });
});
