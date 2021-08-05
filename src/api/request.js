const API = 'https://pokeapi.co/api/v2/';

export const pokemonByCategory = () => {
  try {
    let categoryId = 1;
    const categoryArray = [];
    while (categoryId < 19) {
      fetch(`${API}type/${categoryId}`)
        .then((response) => response.json())
        .then((result) => categoryArray.push(result.pokemon));
      categoryId += 1;
    }
    return categoryArray;
  } catch (error) {
    return null;
  }
};

export const allPokemon = async () => {
  try {
    const response = await fetch(`${API}pokemon?offset=0&limit=20`);
    const newDataJson = await response.json();
    const result = newDataJson.results;
    return result;
  } catch (error) {
    return null;
  }
};

export const fetchPokeData = async (url) => {
  try {
    const response = await fetch(url);
    const newData = await response.json();
    return newData;
  } catch (error) {
    return null;
  }
};

export const artUrl = (id, callback) => {
  fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`)
    .then((img) => {
      if (img.ok) {
        callback(img.url);
      }
    }).catch((err) => err);
};
