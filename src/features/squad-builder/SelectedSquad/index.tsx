import React, { FC, useMemo } from 'react';

import PokeCard from '../PokeCard';
import { normalize } from 'src/utils/strings';
import { Pokemon, SelectedPokemon, PokemonMove } from '../types';

interface Props {
  list: Pokemon[];
  selected: SelectedPokemon[];
}

const MAX_POKEMONS = parseFloat(process.env.REACT_APP_MAX_POKEMONS_IN_SQUAD || '6');

const SelectedSquad: FC<Props> = ({ list, selected }) => {
  // Use the selected id's and associated moves and correlate the id's against
  // our original source of truth.
  // Once we have computed that, we can go ahead and render the selected pokemons.
  const dataSource = useMemo((): any[] => selected.map(selected => {
    const match = list.find(pokemon => pokemon.id === selected.id);

    return {
      ...match,
      selectedMoves: selected.moves
    };
  }), [list, selected]);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold leading-7 uppercase tracking-tight">Your Squad {dataSource.length}/{MAX_POKEMONS}</h2>
      <div className="flex flex-wrap justify-center">
        {dataSource.map(pokemon => (
          <div key={pokemon.id} className="p-5" style={{ width: 300 }}>
            <PokeCard disabled pokemon={pokemon}>
              <ul className="p-3">
                {pokemon.selectedMoves.map((move: PokemonMove) => (
                  <li key={move.name} className="capitalize">{normalize(move.name)}</li>
                ))}
              </ul>
            </PokeCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedSquad;
