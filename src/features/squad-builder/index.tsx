import React from 'react';
import { useQuery } from '@apollo/client';

import { getAllPokemons } from './queries';
import PokemonSelector from './PokemonSelector';
import SelectedSquad from './SelectedSquad';

const SquadBuilder = () => {
  const { loading, error, data } = useQuery(getAllPokemons);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <PokemonSelector list={data.Pokemons} />
      <SelectedSquad />
    </div>
  );
};

export default SquadBuilder;
