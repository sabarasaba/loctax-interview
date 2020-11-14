import React, { FC, memo } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List, areEqual } from 'react-window';

import ListItem from './ListItem';
import { Pokemon } from '../types';
import { Input } from 'src/components/ui';

interface Props {
  list: Array<Pokemon>;
}

const PokemonSelector: FC<Props> = ({ list }) => {
  const Column = memo(({ index, style }: any) => (
    <ListItem pokemon={list[index]} style={style} />
  ), areEqual);

  return (
    <div>
      <Input
        placeholder="Type to filter"
        label="Select a Pokemon"
      />
      <AutoSizer className="mt-5 inline-block">
        {({ width }) => (
          <List
            height={300}
            itemCount={list.length}
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
