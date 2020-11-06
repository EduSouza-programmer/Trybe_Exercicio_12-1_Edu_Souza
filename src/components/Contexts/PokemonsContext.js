import React, { useState, createContext } from 'react';
import Pokemons from '../../data';

const typesOfPokemons = () => {
  return [...new Set(Pokemons.reduce((acc, { type }) => [...acc, type], []))];
};

export const PokemonsContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState(Pokemons);
  const [indexPokemon, setIndexPokemon] = useState(0);
  const [pokemonsTypes, setPokemonsTypes] = useState(typesOfPokemons());
  const [dataPokemons, setDataPokemons] = useState(Pokemons);

  return (
    <PokemonsContext.Provider
      value={{
        pokemons,
        setPokemons,
        indexPokemon,
        setIndexPokemon,
        pokemonsTypes,
        setPokemonsTypes,
        dataPokemons,
        setDataPokemons,
      }}>
      {children}
    </PokemonsContext.Provider>
  );
};
