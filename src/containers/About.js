import React from 'react';
import Navbar from './Nav';
import style from './about.module.css';

const About = () => (
  <>
    <Navbar />
    <div className={style.header}>
      <h1>Hi There!</h1>
      <p>This project is part of the Microverse React Capstone</p>
    </div>
  </>
);

export default About;
