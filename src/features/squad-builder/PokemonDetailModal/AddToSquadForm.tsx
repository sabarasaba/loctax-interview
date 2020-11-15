import React, { FC, useState } from 'react';
import { ValueType } from 'react-select';

import { PokemonMove } from '../types';
import { normalize } from 'src/utils/strings';
import { Select, Button } from 'src/components/ui';

interface Props {
  moves: PokemonMove[];
  id: number;
}

type OptionType = {
  value: string;
  label: string;
};

const serializeOptions = (moves: PokemonMove[]): OptionType[] => {
  return moves.map(move => ({
    value: move.name,
    label: normalize(move.name),
  }));
};

const AddToSquadForm: FC<Props> = ({ moves }) => {
  const [selectedMoves, setSelectedMoves] = useState<ValueType<OptionType>[]>([]);

  return (
    <>
      <Select
        label="Moves"
        placeholder="Select 4 moves"
        isMulti={true}
        closeMenuOnSelect={false}
        options={selectedMoves?.length > 3 ? [] : serializeOptions(moves)}
        value={selectedMoves}
        // @ts-ignore - Unsure how to fix these type errors with react-select.
        onChange={option => setSelectedMoves(option)}
      />

      <div className="mt-8 flex justify-end">
        <Button
          disabled={selectedMoves?.length !== 4}
        >
          Save
        </Button>
      </div>
    </>
  );
};

export default AddToSquadForm;
