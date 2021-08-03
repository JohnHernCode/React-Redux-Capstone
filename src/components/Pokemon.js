import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import style from './pokemon.module.css';
import Navbar from '../containers/Nav';
import { fetchPokeData } from '../api/request';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    margin: '18px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#1626BFFF',
  },
  pos: {
    marginBottom: 12,
  },
});

const Pokemon = ({ location }) => {
  const classes = useStyles();
  const Capitalize = (str) => str.toUpperCase();
  const [data, setData] = useState(null);

  let name;
  let pokeUrl;

  if (location.state === undefined) {
    const { pokeName } = useParams();
    name = pokeName;
    pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}/`;
  } else {
    name = location.state.poke;
    pokeUrl = location.state.url;
  }

  useEffect(async () => {
    const newData = await fetchPokeData(pokeUrl);
    setData(newData);
  }, []);

  if (data) {
    return (
      <span>
        <Navbar />
        <div className={style.flex}>
          <div className={style.mainDiv}>
            <CardContent className={classes.root}>
              <Typography className={classes.title} gutterBottom>
                {Capitalize(name)}
              </Typography>
              <img src={data.sprites.front_default} className={style.imgSize} alt={name} />
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {`Height: ${data.height * 10}cm`}
              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {`Weight: ${data.weight / 10}kg`}
              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {`Base XP: ${data.base_experience}`}
              </Typography>
            </CardContent>
          </div>
        </div>
      </span>
    );
  }
  return (
    <p>Fetching Data...</p>
  );
};

Pokemon.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Pokemon;
