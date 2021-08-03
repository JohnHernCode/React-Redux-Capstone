import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, AppBar } from '@material-ui/core';
import style from './nav.module.css';
import navImage from '../images/pokedex.png';

function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Tabs>
          <img src={navImage} className={style.logo} alt="Logo" />
          <Link to="/" className={style.linkStyle}>Home </Link>
          <Link to="/about" className={style.linkStyle}>About </Link>
        </Tabs>
      </AppBar>
    </>
  );
}

export default Navbar;
