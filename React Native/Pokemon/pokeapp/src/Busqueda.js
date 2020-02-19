import React, { Component } from 'react';

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
  

  export default Busqueda;