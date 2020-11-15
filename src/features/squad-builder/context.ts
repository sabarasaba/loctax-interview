import React, { useReducer } from 'react';

import { SelectedPokemon } from './types';

type Action = {
  type: string;
  payload: SelectedPokemon;
}

const initialState: SelectedPokemon[] = [];

// @ts-ignore - lazy to figure out what to pass as default
export const SquadBuilderContext = React.createContext();

const reducer = (state: SelectedPokemon[], action: Action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return [
      ...state,
        action.payload
      ];

    default:
      return state;
  }
};

const useSquadState = (): [any, SelectedPokemon[]] => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addPokemonToSquad = (pokemon: SelectedPokemon) => dispatch({ type: 'ADD_POKEMON', payload: pokemon });

  return [{
    addPokemonToSquad
  }, state];
};

export default useSquadState;
