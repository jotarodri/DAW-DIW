import React, { Component } from 'react';


class DivPokemons extends Component{

    click = ()=>{
      console.log("Hola")
      this.props.onClick(this.props.datosPokemon)
    }
  
   
    render() {
      //console.log(this.props.datosPokemon);
  
      return (
  
        
        <div className="pokemon" key = {this.props.datosPokemon.name}  onClick={this.click}>    
       
        
        <p>{this.props.datosPokemon.name.toUpperCase()}</p>
        
        <img src={this.props.datosPokemon.sprites.front_default} height="100" width="100"></img>
            
        </div>
  
     );
   
    }
   }

export default DivPokemons;