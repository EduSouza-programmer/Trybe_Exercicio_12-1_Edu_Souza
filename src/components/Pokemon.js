import React from 'react';

function Pokemon(props) {
  const { name, type, averageWeight, image } = props.pokemon;
  return (
    <div className="pokemon">
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
