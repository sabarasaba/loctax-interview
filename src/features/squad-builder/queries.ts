import { gql } from '@apollo/client';

export const getAllPokemons = gql`{
  Pokemons(first: 151) {
    id
    name
    image
    types {
      name
    }
  }
}`;
