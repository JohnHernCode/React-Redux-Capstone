import React from 'react';
import Navbar from './Nav';
import PokemonList from '../components/PokemonList';
import style from './home.module.css';

const Home = () => (
  <>
    <Navbar />
    <h1 className={style.text}>
      Welcome to the Pokédex. Find out information about your favorite Pokemon.
    </h1>
    <PokemonList />
  </>
);

export default Home;
