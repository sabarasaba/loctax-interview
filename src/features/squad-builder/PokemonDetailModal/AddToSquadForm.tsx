import React, { FC, useState, useContext } from 'react';
import { ValueType } from 'react-select';

import { PokemonMove } from '../types';
import { normalize } from 'src/utils/strings';
import { SquadBuilderContext } from '../context';
import { Select, Button } from 'src/components/ui';

interface Props {
  id: number;
  moves: PokemonMove[];
  onClose: (...args: any[]) => any;
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

const AddToSquadForm: FC<Props> = ({ id, moves, onClose }) => {
  const { actions } = useContext<any>(SquadBuilderContext);
  const [selectedMoves, setSelectedMoves] = useState<ValueType<OptionType>[]>([]);

  const onSubmit = () => {
    // Add submitted pokemon to our squad builder context
    actions.addPokemonToSquad({
      id,
      moves: selectedMoves.map((option: any) => ({ name: option.value }))
    });

    // Then we can go ahead and close the modal
    onClose();
  };

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
        <Button onClick={onSubmit} disabled={selectedMoves?.length !== 4}>
          Save
        </Button>
      </div>
    </>
  );
};

export default AddToSquadForm;
