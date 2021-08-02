import React from 'react';
import Navbar from './Nav';
import PokemonList from '../components/PokemonList';

const Home = () => (
    <>
      <Navbar />
      <h1>
        Welcome to the Pokédex. Find out information about your favorite Pokemon.
      </h1>
      <PokemonList />
    </>
);

export default Home;
