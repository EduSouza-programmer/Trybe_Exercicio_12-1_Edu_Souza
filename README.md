<h1 align="center">
    <img alt="Image Trybe" src="https://i.ibb.co/d4W2x4g/trybe.png" width="400px" />
</h1>

<h3 align="center">
  Exercício 12-1: Componentes com estado e eventos - Concluído o/ o/ o/ :star:
</h3>

<blockquote align="center">“Quanto mais você estuda, mais aprende e se aproxima de realizar seu sonhos!”</blockquote>

<h1></h1>

<p align="center">

  <a href="https://www.linkedin.com/in/eduardosouzaprogrammer/">
    <img alt="Made by Eduardo Souza" src="https://img.shields.io/badge/made%20by-Edu%20Souza-%23F8952D">
  </a>&nbsp;

 <a href="https://edusouza-programmer.github.io/">
<img alt="Github page Edu Souza " src="https://img.shields.io/badge/Github%20page-Edu_Souza-orange">
</a>&nbsp;

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

<p align="center">
  <a href="#rocket-Sobre-o-Exercício">Sobre o Exercício</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#postbox-Entrega">Entrega</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#unlock-Licença">Licença</a>
</p>

# :rocket: Sobre o Exercício

O dia de hoje se dedica a praticar ainda mais o seu conhecimento sobre Componentes React e a aprofundá-lo com o conceito de Estado. Esse é um conceito importante no qual você se aprofundar por todo o tempo que estudar React!

Um estado representa um momento de um componente dinâmico. Se o seu componente é um relógio, o estado atual dele é a hora atual. Se o seu componente é uma tabela cujo conteúdo muda de acordo com o que o usuário clica na página, o estado dele contém o conteúdo da tabela. Se o seu componente fosse um jogo de videogame, o estado seria o momento em que você está no jogo, a sua quantidade de vidas, munição, itens etc. Estado é, então, um momento de algo que pode mudar ao longo do tempo (dinâmico). É uma informação que você quer preservar enquanto o componente está interagindo com quem usa.

# :postbox: Entrega

### :clipboard: Sumário

- <p><a href="#1"> :pushpin: 1.</a> Hoje você vai incrementar a sua Pokedex utilizando Estado.</p>

## :books: Exercícios

### 1°

Hoje você vai incrementar a sua Pokedex utilizando Estado.
Você pode encontrar informações mais detalhadas no repositorio do exercício!

- Altere a sua página para que, ao invés de exibir toda a lista de pokémons, ela exiba um pokémon por vez. Ao apertar um botão de Próximo pokémon, a página passa a exibir o próximo pokémon da lista, e depois o próximo, e assim sucessivamente. Ao se chegar ao último pokémon da lista, a pokedex deve voltar para o primeiro pokémon no apertar do botão. Dica: Lembre-se disso!

- Sua pokedex deve ter dois botões contendo os tipos Fire e Psychic. A partir dessa seleção, a pokedex deve circular somente pelos pokémons daquele tipo. Quando a página carrega, um desses filtros deve estar selecionado.

##### Bônus

Agora que você pegou todos os pokémons, consegue pegar todos os bônus?! Não é fácil completar todos! Faça quantos conseguir.

- Separe os estilos de CSS por componente, fazendo um arquivo .css para cada.

- Sua pokedex deve ter um terceiro botão chamado All para resetar o filtro. Após clicá-lo, a pokedex deve voltar a circular por todos os pokémons. Quando a página carrega, o filtro selecionado deve ser o All.

- Crie um componente Button e use-o para fazer os botões reutilizáveis da sua Pokedex. Dica: pesquise sobre o this.props.children do React!

- Faça os botões de filtragem serem dinâmicos: sua pokedex deve gerar um botão de filtragem para cada tipo de pokémon disponível nos dados, independente de quais ou quantos sejam, sem repetição de tipos. Ou seja, se sua pokedex possui pokémons do tipo Fire, Psychic, Electric e Normal, deve aparecer como opção de filtro um botão para cada um desses tipos. Além disso, ela deve manter o botão All.

- Faça o botão de Próximo pokémon ser desabilitado se a lista filtrada de pokémons tiver um só pokémon.

#### Resposta:

<div align="center">
  <img src="https://github.com/tryber/exercise-pokedex-state/blob/master/images/pokedex.gif?raw=true" alt="demo" height="300">
</div>

<details>
 <summary> :pencil2: Código Javascript</summary>

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// app.js
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


// PokemonsContext
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


// Pokedex
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

// PokedexDisplay
import React, { useContext } from 'react';
import { PokemonsContext } from './Contexts/PokemonsContext';
import Pokemon from './Pokemon';

function PokedexDisplay() {
  const { pokemons, indexPokemon } = useContext(PokemonsContext);

  return <Pokemon pokemon={pokemons[indexPokemon]} />;
}

export default PokedexDisplay;

// PokedexControllers
import React, { useContext } from 'react';
import { PokemonsContext } from './Contexts/PokemonsContext';
import Button from './Button';

function PokedexControllers() {
  const {
    pokemons,
    setPokemons,
    indexPokemon,
    setIndexPokemon,
    pokemonsTypes,
    dataPokemons,
  } = useContext(PokemonsContext);

  const filterPokemonByType = type => {
    const filtedPokemon = dataPokemons.filter(pokemon => pokemon.type === type);
    setPokemons(filtedPokemon);
    setIndexPokemon(0);
  };

  const populateButtonsWithTypes = () => {
    return pokemonsTypes.map(type => {
      return (
        <Button
          onClick={() => filterPokemonByType(type)}
          className='buttonFilter'
          key={type}>
          {type}
        </Button>
      );
    });
  };

  const getAllpokemons = () => {
    setPokemons(dataPokemons);
    setIndexPokemon(0);
  };

  const forwardPokemon = () => {
    setIndexPokemon((indexPokemon + 1) % pokemons.length);
  };

  const backwardPokemon = () => {
    setIndexPokemon((indexPokemon - 1) % pokemons.length);
  };

  return (
    <div>
      <div className='conteiner-button-type'>
        <Button onClick={getAllpokemons} className='buttonFilter'>
          All
        </Button>
        {populateButtonsWithTypes()}
      </div>
      <div className='conteiner-button-controller'>
        <Button
          onClick={backwardPokemon}
          className='buttonFilter'
          disabled={indexPokemon <= 0}>
          back
        </Button>
        <Button
          onClick={forwardPokemon}
          className='buttonFilter'
          disabled={indexPokemon === pokemons.length - 1}>
          next
        </Button>
      </div>
    </div>
  );
}

export default PokedexControllers;

// Button
import React from 'react';

const Button = ({ className, children, disabled, onClick }) => (
  <button
    onClick={onClick}
    className={`button-text ${className}`}
    disabled={disabled}>
    {children}
  </button>
);

export default Button;

// Pokemon
import React from 'react';

function Pokemon(props) {
  const { name, type, averageWeight, image } = props.pokemon;
  return (
    <div className='pokemon'>
      <div>
        <p> {name} </p>
        <p> {type} </p>
        <p>
          {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
        </p>
      </div>
      <img src={image} alt={`${name} sprite`} />
    </div>
  );
}

export default Pokemon;
```

</details>

<p align="right">
   <a href="https://edusouza-programmer.github.io/Trybe_Exercicio_11-2_Edu_Souza">
    <img alt="Go index.html" src="https://img.shields.io/badge/Go-app_react-orange">
    </a>&nbsp;
    <a href="#clipboard-Sumário">
    <img alt="Back Sumário" src="https://img.shields.io/badge/Back-Sum%C3%A1rio-orange">
  </a>
</p>

#

## :unlock: Licença

Este projeto está licenciado sob a Licença MIT - consulte [LICENSE](https://opensource.org/licenses/MIT) para maiores detalhes.
