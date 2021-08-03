import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import style from './pokemonarea.module.css';
import { artUrl } from '../api/request';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});

const PokemonListing = ({ poke, url, id }) => {
  const classes = useStyles();

  function capitalizeLetters(string) {
    return string.toUpperCase();
  }

  return (
    <div className={style.column}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            <Link to={{ pathname: `/pokemon/${poke}`, state: { poke, url, id } }}>{capitalizeLetters(poke)}</Link>
            <img alt={poke} src={artUrl(id)} />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

PokemonListing.propTypes = {
  poke: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string,
};

PokemonListing.defaultProps = {
  id: PropTypes.string,
};

export default PokemonListing;
