import React from 'react';
import { Link } from 'react-router-dom';
// import { Tabs, AppBar } from '@material-ui/core';
import style from './nav.module.css';
import navImage from '../images/pokedex.png';

function Navbar() {
  return (
    <>
      {/* <AppBar position="static"> */}
      {/*  <Tabs value={0}> */}
      {/*    <img src={navImage} className={style.logo} alt="Logo" /> */}
      {/*    <Link to="/" className={style.linkStyle}>Home </Link> */}
      {/*    <Link to="/about" className={style.linkStyle}>About </Link> */}
      {/*  </Tabs> */}
      {/* </AppBar> */}
      <header className={style.header}>
        <img src={navImage} className={style.logo} alt="Logo" />
        <ul className={style.mainNav}>
          <Link to="/" className={style.linkStyle}>Home </Link>
          <Link to="/about" className={style.linkStyle}>About </Link>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
