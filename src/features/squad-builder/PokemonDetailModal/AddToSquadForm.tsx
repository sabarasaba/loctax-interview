import React, { FC } from 'react';

import { PokemonMove } from '../types';
import { decamelize } from 'src/utils/strings';
import { Select, Button } from 'src/components/ui';

interface Props {
  moves: PokemonMove[];
}

const serializeOptions = (moves: PokemonMove[]) => {
  return moves.map(move => ({
    value: move.name,
    label: decamelize(move.name),
  }));
};

const AddToSquadForm: FC<Props> = ({ moves }) => {
  return (
    <>
      <Select
        label="Moves"
        placeholder="Select 4 moves"
        isMulti={true}
        closeMenuOnSelect={false}
        options={serializeOptions(moves)}
      />

      <div className="mt-5 flex justify-end">
        <Button>Save</Button>
      </div>
    </>
  );
};

export default AddToSquadForm;
