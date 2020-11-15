import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import useSquadState, { SquadBuilderContext } from './context';
import { getAllPokemons } from './queries';
import SelectedSquad from './SelectedSquad';
import PokemonSelector from './PokemonSelector';
import PokemonDetailModal from './PokemonDetailModal';

const SquadBuilder = () => {
  const [actions, state] = useSquadState();
  const { loading, error, data } = useQuery(getAllPokemons);
  const [showModalFor, showDetailsModal] = useState<string | null>(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <SquadBuilderContext.Provider value={{ state, actions }}>
      <PokemonSelector list={data.Pokemons} {...{showDetailsModal}} />
      <PokemonDetailModal showFor={showModalFor} onClose={() => showDetailsModal(null)} />
      <SelectedSquad list={data.Pokemons} selected={state} />
    </SquadBuilderContext.Provider>
  );
};

export default SquadBuilder;
