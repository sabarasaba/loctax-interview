export interface PokemonType {
  name: string;
}

export interface PokemonStat {
  name: string;
  value: string;
}

export interface PokemonMove {
  name: string;
}

export interface SelectedPokemon {
  id: number;
  moves?: PokemonMove[];
}

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: PokemonType[];
  stats?: PokemonStat[];
  moves?: PokemonMove[];
  selectedMoves?: PokemonMove[];
}
