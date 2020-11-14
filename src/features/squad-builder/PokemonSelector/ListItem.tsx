import React, { FC } from 'react';

import { Pokemon } from '../types';

interface Props {
  pokemon: Pokemon;
  style: any;
}

const ListItem: FC<Props> = ({ pokemon, style }) => {
  return (
    <div className="p-5 " style={style}>
      <div className="h-full w-full rounded-md bg-white shadow-lg">
        <div className="bg-accents-2">
          <img
            className="mx-auto"
            style={{ width: 150, height: 150 }}
            src={pokemon.image}
            alt={`ths is what ${pokemon.name} looks like`}
          />
        </div>
        <div className="p-3">
          <div className="text-accents-5 text-sm">
            #{pokemon.id}
          </div>
          <h3 className="text-base font-semibold capitalize">{pokemon.name}</h3>
          <div>
            {pokemon.types.map((type, index) => (
              <span
                key={index}
                style={{ padding: '3px 6px' }}
                className={`bg-${type.name.toLowerCase()} rounded mr-2 text-base-bg uppercase font-bold text-xs`}
              >
                {type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
