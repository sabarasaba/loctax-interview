import React, { FC } from 'react';
import { useQuery } from '@apollo/client';

import { Modal } from 'src/components/ui';
import { getPokemonByName } from '../queries';

interface Props {
  showFor: string | null;
  onClose: (...args: any[]) => any;
}

const PokemonDetails: FC<Props> = ({ showFor, onClose }) => {
  const { loading, error, data } = useQuery(getPokemonByName, {
    skip: !showFor,
    variables: { name: showFor },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <Modal open={!!showFor} onClose={onClose}>
      <div>
        <h3 className="text-accents-8 text-sm uppercase font-medium">Poke Details</h3>
      </div>
    </Modal>
  );
};

export default PokemonDetails;
