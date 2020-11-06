import React from 'react';
import { PokemonProvider } from './Contexts/PokemonsContext';
import Pokedex from './Pokedex';
import '../styles/App.css';

function App() {
  return (
    <main>
      <PokemonProvider>
        <Pokedex />
      </PokemonProvider>
    </main>
  );
}

export default App;
