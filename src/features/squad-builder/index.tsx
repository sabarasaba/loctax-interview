import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { getAllPokemons } from './queries';
import SelectedSquad from './SelectedSquad';
import PokemonSelector from './PokemonSelector';
import PokemonDetailModal from './PokemonDetailModal';
import useSquadState, { SquadBuilderContext } from './context';

const SquadBuilder = () => {
  const [actions, state] = useSquadState();
  const { loading, data } = useQuery(getAllPokemons);
  const [showModalFor, showDetailsModal] = useState<string | null>(null);

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <SquadBuilderContext.Provider value={{ state, actions }}>
      <PokemonSelector list={data.Pokemons} selected={state} {...{showDetailsModal}} />
      <PokemonDetailModal showFor={showModalFor} onClose={() => showDetailsModal(null)} />
      <SelectedSquad list={data.Pokemons} selected={state} />
    </SquadBuilderContext.Provider>
  );
};

export default SquadBuilder;
