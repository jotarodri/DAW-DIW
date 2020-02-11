import React, { Component } from 'react';
import letra from './imgs/pokemon.png';
import logo from './imgs/pokeball.png';
import './App.css';





class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Busqueda />
    </div>
    
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <img src={letra} className="letras" alt="logo" /> 
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
         
        </p>
      </div>
    );
  }
}

class Busqueda extends Component {
  render() {
    return (

        <div className="App-busqueda">
         
          <input type="search" className="buscadorPokemons" placeholder="Search.."></input>
          
          <input type="button" value="Buscar" className="botonBuscar"></input>

        </div>
        
    
    );
  }
}


export default App;
