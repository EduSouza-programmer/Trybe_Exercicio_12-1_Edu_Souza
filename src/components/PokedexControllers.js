import React, { useContext } from 'react';
import { PokemonsContext } from './Contexts/PokemonsContext';
import Button from './Button';

function PokedexControllers() {
  const {
    pokemons,
    setPokemons,
    data: { indexPokemon, pokemonsTypes, dataPokemons },
    setData,
  } = useContext(PokemonsContext);

  const firstIndexPokemon = () => {
    setData(prevState => ({
      ...prevState,
      indexPokemon: 0,
    }));
  };

  const filterPokemonByType = type => {
    const filtedPokemon = dataPokemons.filter(pokemon => pokemon.type === type);
    setPokemons(filtedPokemon);
    firstIndexPokemon();
  };

  const populateButtonsWithTypes = () => {
    return pokemonsTypes.map(type => {
      return (
        <Button
          onClick={() => filterPokemonByType(type)}
          className="buttonFilter"
          key={type}
        >
          {type}
        </Button>
      );
    });
  };

  const getAllpokemons = () => {
    setPokemons(dataPokemons);
    firstIndexPokemon();
  };

  const forwardPokemon = () => {
    setData(prevState => ({
      ...prevState,
      indexPokemon: (indexPokemon + 1) % pokemons.length,
    }));
  };

  const backwardPokemon = () => {
    setData(prevState => ({
      ...prevState,
      indexPokemon: (indexPokemon - 1) % pokemons.length,
    }));
  };

  return (
    <div>
      <div className="conteiner-button-type">
        <Button onClick={getAllpokemons} className="buttonFilter">
          All
        </Button>
        {populateButtonsWithTypes()}
      </div>
      <div className="conteiner-button-controller">
        <Button
          onClick={backwardPokemon}
          className="buttonFilter"
          disabled={indexPokemon <= 0}
        >
          back
        </Button>
        <Button
          onClick={forwardPokemon}
          className="buttonFilter"
          disabled={indexPokemon === pokemons.length - 1}
        >
          next
        </Button>
      </div>
    </div>
  );
}

export default PokedexControllers;
