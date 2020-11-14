import React, { FC, memo, useState, useMemo } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List, areEqual } from 'react-window';

import ListItem from './ListItem';
import { Pokemon } from '../types';
import { Input } from 'src/components/ui';

interface Props {
  list: Pokemon[];
  showDetailsModal: (...args: any[]) => any;
}

const PokemonSelector: FC<Props> = ({ list, showDetailsModal }) => {
  const [filter, setFilter] = useState<string>('');

  const dataSource = useMemo((): Pokemon[] => {
    return list.filter(item => item.name.startsWith(filter));
  }, [list, filter]);

  const Column = memo(({ index, style }: any) => (
    <ListItem pokemon={dataSource[index]} {...{ style, showDetailsModal }} />
  ), areEqual);

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
            itemCount={dataSource.length}
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
