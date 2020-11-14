import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { getAllPokemons } from './queries';
import SelectedSquad from './SelectedSquad';
import PokemonSelector from './PokemonSelector';
import PokemonDetailModal from './PokemonDetailModal';

const SquadBuilder = () => {
  const [showModalFor, showDetailsModal] = useState<string | null>(null);
  const { loading, error, data } = useQuery(getAllPokemons);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <PokemonSelector list={data.Pokemons} {...{showDetailsModal}} />
      <PokemonDetailModal showFor={showModalFor} onClose={() => showDetailsModal(null)} />
      <SelectedSquad />
    </>
  );
};

export default SquadBuilder;
