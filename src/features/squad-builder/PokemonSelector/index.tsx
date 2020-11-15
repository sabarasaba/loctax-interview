import React, { FC, memo, useState, useMemo } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List, areEqual } from 'react-window';

import PokeCard from '../PokeCard';
import { Input } from 'src/components/ui';
import { Pokemon, SelectedPokemon } from '../types';

interface Props {
  list: Pokemon[];
  selected: SelectedPokemon[];
  showDetailsModal: (...args: any[]) => any;
}

const MAX_POKEMONS = parseFloat(process.env.REACT_APP_MAX_POKEMONS_IN_SQUAD || '6');

const PokemonSelector: FC<Props> = ({ list, selected, showDetailsModal }) => {
  const [filter, setFilter] = useState<string>('');

  // Bundle additional data to list items using the "itemData" prop.
  // It will be accessible to item renderers as props.data.
  // Memoize this data to avoid unnecessary re-renders.
  const dataSource = useMemo((): any => ({
    items: list.filter(item => item.name.startsWith(filter)),
    showDetailsModal,
    selected
  }), [list, filter, showDetailsModal, selected]);

  // List items are also potentially expensive to render, so lets memoize them too!
  const Column = memo(({ data, index, style }: any) => {
    const pokemon = data.items[index];
    const alreadyAdded = data.selected.find((x: any) => x.id === pokemon.id);

    return (
      <div className="p-5 " style={style}>
        <PokeCard
          pokemon={pokemon}
          disabled={!!alreadyAdded || data.selected.length === MAX_POKEMONS}
          onClick={() => data.showDetailsModal(pokemon.name)}
        />
      </div>
    );
  }, areEqual);

  return (
    <div>
      <Input
        placeholder="Type to filter"
        label="Select a Pokemon"
        value={filter}
        onChange={(value: string) => setFilter(value)}
      />
      <AutoSizer className="mt-5 inline-block">
        {({ width }) => (
          <List
            height={300}
            itemData={dataSource}
            itemCount={dataSource.items.length}
            itemSize={300}
            layout="horizontal"
            className="scrollable"
            width={width}
          >
            {Column}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

export default PokemonSelector;
