import React, { Component } from 'react';
import  './style/Fichapokemon.css';

class Fichapokemon extends Component{

    constructor(props){
      super(props);
    }
    
    render(){
      return(
        <div className="fichaPokemon">
          {console.log(this.props)
          }
          <div className="headerFicha">
         
        <p className="nombreFicha">{this.props.nombrePokemon.toUpperCase()}</p>
        </div>
        </div>
      )
    }
    
  
    }

export default Fichapokemon;