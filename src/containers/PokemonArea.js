import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import style from './pokemonarea.module.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});

const PokemonListing = ({ poke, url }) => {
  const classes = useStyles();

  function capitalizeLetters(string) {
    return string.toUpperCase();
  }

  return (
    <div className={style.column}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            <Link to={{ pathname: `/pokemon/${poke}`, state: { poke, url } }}>{capitalizeLetters(poke)}</Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

PokemonListing.propTypes = {
  poke: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PokemonListing;
