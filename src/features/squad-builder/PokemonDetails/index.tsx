import React from 'react';
import { useQuery } from '@apollo/client';

import { getPokemonByName } from '../queries';

const PokemonDetails = () => {
  const { loading, error, data } = useQuery(getPokemonByName, {
    variables: { name: 'snorlax' },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <div>
      wow such details
    </div>
  );
};

export default PokemonDetails;
