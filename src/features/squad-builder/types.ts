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

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: PokemonType[];
  stats?: PokemonStat[];
  moves?: PokemonMove[];
}
