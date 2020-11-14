import { gql } from '@apollo/client';

// THERE ARE ONLY 151 POKEMONS. FIGHT ME!
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

export const getPokemonByName = gql`
  query getPokemonByName($name: String!) {
    Pokemon(name: $name) {
      id
      name
      image
      stats {
        name
        value
      }
      moves {
        name
      }
      types {
        name
      }
    }
  }
`;
