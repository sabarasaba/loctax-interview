import React, { FC } from 'react';
import { useQuery } from '@apollo/client';

import { Modal } from 'src/components/ui';
import { getPokemonByName } from '../queries';
import AddToSquadForm from './AddToSquadForm';
import { PokemonStat, PokemonType } from '../types';

interface Props {
  showFor: string | null;
  onClose: (...args: any[]) => any;
}

const PokemonDetails: FC<Props> = ({ showFor, onClose }) => {
  const { loading, data } = useQuery(getPokemonByName, {
    // No need to re-fetch if we dont need to display the modal
    skip: !showFor,
    variables: { name: showFor },
  });
  const isLoading = !showFor || loading;

  return (
    <Modal open={!!showFor} onClose={onClose}>
      {!isLoading && (
        <>
          <h3 className="flex items-center text-accents-8 text-base capitalize font-medium mb-6">
            <span>
              #{data.Pokemon.id} - {data.Pokemon.name}
            </span>
            <span className="ml-3">
              {data.Pokemon.types.map((type: PokemonType, index: number) => (
                <span
                  key={index}
                  style={{ padding: '3px 6px' }}
                  className={`bg-${type.name.toLowerCase()} rounded mr-2 text-base-bg uppercase font-bold text-xs`}
                >
                  {type.name}
                </span>
              ))}
            </span>
          </h3>

          <div className="flex mt-3 mb-3">
            <div className="rounded mr-6 bg-accents-2">
              <img
                className="mx-auto"
                style={{ width: 150, height: 150 }}
                src={data.Pokemon.image}
                alt={`this is what ${data.Pokemon.name} looks like`}
              />
            </div>
            <div>
              <h3>Stats</h3>
              <div className="flex flex-wrap -mx-2">
                {data.Pokemon.stats.map((stat: PokemonStat) => (
                  <div
                    key={stat.name}
                    className="my-2 px-2 w-1/3 overflow-hidden"
                  >
                    <div className="flex-grow">
                      <h2 className="text-accents-5 uppercase text-xs font-medium">{stat.name.replace('-', ' ')}</h2>
                      <p className="text-base-fg">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <AddToSquadForm
            onClose={onClose}
            id={data.Pokemon.id}
            moves={data.Pokemon.moves}
          />
        </>
      )}
    </Modal>
  );
};

export default PokemonDetails;
