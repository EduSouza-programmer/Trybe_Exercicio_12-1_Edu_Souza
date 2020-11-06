import React from 'react';
import PokedexDisplay from './PokedexDisplay';
import PokedexControllers from './PokedexControllers';

function Pokedex() {
  return (
    <div className='pokedex'>
      <h1>Pokedex</h1>
      <PokedexDisplay />
      <PokedexControllers />
    </div>
  );
}

export default Pokedex;
