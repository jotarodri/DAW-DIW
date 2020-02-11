import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';




ReactDOM.render(
  <App />,
  document.getElementById('root'),


 
);
var pokemons;
getPokemons();

function getPokemons() {
  fetch('https://pokeapi.co/api/v2/pokedex/1')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    pokemons = myJson;
  });
}