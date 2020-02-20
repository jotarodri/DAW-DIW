import React, { Component } from 'react';
import  './style/Fichapokemon.css';

class Fichapokemon extends Component{

    constructor(props){
      super(props);
      this.state = {
        datos:[],
       
       };
    }

      
  async componentDidMount(){
   
    let fetchPokemon = await fetch(this.props.datosPokemon.species.url);
    let listaPokemon = await fetchPokemon.json();
        
       this.setState({
        datos: listaPokemon
      })
   
  }

    
    render(){
      return(
        <div className="fichaPokemon">
         
          <div className="headerFicha">
         {console.log(this.state.datos)}
          <h1>{this.props.nombrePokemon.toUpperCase()}</h1>
        <img className="imgPokemon" src={this.props.datosPokemon.sprites.front_default} height="150" width="150"></img>
        

        </div>

        <div className="descripcionPokemon">

        <h1>DESCRIPCION</h1>

       <p>

        {this.state.datos.flavor_text_entries[0].flavor_text}

       </p>

        </div>
        </div>
      )
    }
    
  
    }



export default Fichapokemon;