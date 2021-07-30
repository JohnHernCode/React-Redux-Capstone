import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokeData } from '../api-requests/request';

const Pokemon = ({ location }) => {
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
        {/*<Navbar /> will be here */}
        <div>
          <div>
            <h1>{name}</h1>
            {/* Image here */}
            <div>
              <div>
                {`${data.height * 10}cm`}
              </div>
            </div>

            <div>
              <div>
                {`${data.weight / 10}kg`}
              </div>
            </div>

            <div>
              <div>
                {`${data.id}`}
              </div>
            </div>

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
