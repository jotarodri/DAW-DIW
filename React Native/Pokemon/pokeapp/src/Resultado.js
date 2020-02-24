import React, { Component } from 'react';
import DivPokemons from './DivPokemons';
import Fichapokemon from './Fichapokemon';
import Busqueda from './Busqueda';


class Resultado extends Component{

    constructor(props){
      super(props);
      this.state = {
       listapokemones:[],
       mostrar:true,
       pokemon:null,
       filtered:[],
      };
    }
  
  async componentDidMount(){
   
  let fetchPokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1500");
  let listaPokemon = await fetchPokemon.json();
  
  const todosPokemons =  listaPokemon.results.map(async pokemones=> {
  
    let fetchPokemon2 = await fetch(pokemones.url);
    let listaPokemon2 = await fetchPokemon2.json();
    
    return listaPokemon2;
  });


  Promise.all(todosPokemons).then(pokemons =>{
  this.setState({
    listapokemones: pokemons
  })
  });
  
  }
  
   cambiarEstado = (datosPokemon) => {
    this.setState({pokemon:datosPokemon})
    this.setState({mostrar:false})
  }
  
  

    render() {
      
      if(this.state.mostrar){
        
        return(
         <div className="App-resultado">
          {console.log("Estado refrescado")}
          {this.state.listapokemones.map(pokemon => {
            return (<DivPokemons onClick={this.cambiarEstado} datosPokemon={pokemon} key={pokemon.name}/>)
        })}
    
      </div>
      )
      }else{
        {ocultarSearch()}
        return(
          <Fichapokemon nombrePokemon={this.state.pokemon.name} datosPokemon={this.state.pokemon} />
        )
      
      
    }
  }
  }

function ocultarSearch() {
  let search = document.getElementsByClassName("buscadorPokemons")[0];
  let btn = document.getElementsByClassName("botonBuscar")[0];
  search.classList.add("novisible")
  btn.classList.add("novisible")
}



export default Resultado;