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
        <Resultado />
       
    </div>
    
    );
  }
}

class Header extends Component {
  render() {
    return (
  
        <div className="App-header">
        <img src={letra} className="letras" alt="logo" /> 
        <img src={logo} className="App-logo" alt="logo" />
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


class Resultado extends React.Component{
  constructor(props){
    super(props);
    this.state = {
     listapokemones:[]
    };
  }

async componentDidMount(){
 
let fetchPokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
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
 

  render() {

    return (
      
        <div className="App-resultado">
          {console.log(this.state.listapokemones)}
     
           
          
            {this.state.listapokemones.map(pokemon => {
          return(  <div className="pokemon">    
           
           <p>{pokemon.name.toUpperCase()}</p>
           
           <img src={pokemon.sprites.front_default} height="100" width="100"></img>
               
              </div>)
            })}
          
      
        </div>
        
    
    );
  }
}





export default App;
