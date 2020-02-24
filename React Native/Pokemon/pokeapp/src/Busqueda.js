import React, { Component } from 'react';
import Resultado from './Resultado';

class Busqueda extends Component {

  constructor(props){
    super(props);
    this.state = {
     pokeBuscar: "pikapolla",
     
    };
  }

  cambiarEstado = (text) => {
    this.setState({pokeBuscar:text.target.value})

    
  }

    render() {
      return (
  
          <div className="App-busqueda">
           
            <input type="search" className="buscadorPokemons" placeholder="Search.." onChange={this.cambiarEstado}></input>
            
            <input type="button" value="Buscar" className="botonBuscar"></input>
  
          </div>
          
         
      );
      
    }
  }
  

  export default Busqueda;