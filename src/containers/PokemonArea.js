import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './pokemonarea.module.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
      <div className={style.column}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              <Link to={{ pathname: `/pokemon/${poke}`, state: { poke, url } }}>{capitalizeFirstLetter(poke)}</Link>
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
