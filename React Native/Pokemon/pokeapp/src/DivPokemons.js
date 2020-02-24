import React, { Component } from 'react';


class DivPokemons extends Component{

    click = ()=>{
      console.log("Hola")
      this.props.onClick(this.props.datosPokemon)
    }
  
     desocultarSearch() {
      let search = document.getElementsByClassName("buscadorPokemons")[0];
      let btn = document.getElementsByClassName("botonBuscar")[0];
      search.classList.remove("novisible")
      btn.classList.remove("novisible")
      search.classList.add("visible")
      btn.classList.add("visible")
    }
   
    render() {
      {this.desocultarSearch()}
  
      return (
  
        <div className="App-ficha">
        <div className="pokemon" key={this.props.datosPokemon.name}  onClick= {this.click}>    
       
        
        <p>{this.props.datosPokemon.name.toUpperCase()}</p>
        
        <img src={this.props.datosPokemon.sprites.front_default} alt ="imagenPokemon" height="100" width="100"></img>
            
        </div>
        </div>
     );
   
    }
   }

export default DivPokemons;