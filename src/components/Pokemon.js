import React from 'react';
import Navbar from "../containers/Nav";
import PropTypes from 'prop-types';
import style from './pokemon.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokeData } from '../api/request';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
    textAlign: "center",
    fontWeight: "bold",
  },
  pos: {
    marginBottom: 12,
  },
});

const Pokemon = ({ location }) => {
  const classes = useStyles();
  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
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
        <div className={style.cardCenter}>
          <Card className={classes.root}>
            <CardContent className={classes.root}>
              <Typography className={classes.title} gutterBottom>
                {Capitalize(name)}
              </Typography>
              <img src={data.sprites.front_default} className={style.imgSize} alt={name} />
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {`${data.height * 10}cm`}
              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {`${data.weight / 10}kg`}
              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {`${data.id}`}
              </Typography>
            </CardContent>
          </Card>
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
