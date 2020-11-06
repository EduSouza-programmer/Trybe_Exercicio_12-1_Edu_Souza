import React, { useState, createContext } from 'react';
import Pokemons from '../../data';

const typesOfPokemons = () => {
  return [...new Set(Pokemons.reduce((acc, { type }) => [...acc, type], []))];
};

export const PokemonsContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState(Pokemons);
  const [data, setData] = useState({
    indexPokemon: 0,
    pokemonsTypes: typesOfPokemons(),
    dataPokemons: Pokemons,
  });

  return (
    <PokemonsContext.Provider value={{ pokemons, setPokemons, data, setData }}>
      {children}
    </PokemonsContext.Provider>
  );
};
