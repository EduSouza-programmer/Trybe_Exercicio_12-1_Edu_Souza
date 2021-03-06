import React, { useContext } from 'react';
import { PokemonsContext } from './Contexts/PokemonsContext';
import Pokemon from './Pokemon';

function PokedexDisplay() {
  const {
    pokemons,
    data: { indexPokemon },
  } = useContext(PokemonsContext);

  return <Pokemon pokemon={pokemons[indexPokemon]} />;
}

export default PokedexDisplay;
