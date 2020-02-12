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
     nombre: "gaston",
     listapokemones:[]
    };
  }

async componentDidMount(){
 
let fetchPokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
let listaPokemon = await fetchPokemon.json();



this.setState({
  nombre: listaPokemon.results[0].name,
  listapokemones: listaPokemon.results,
});


console.log(this.state.listapokemones[0].name);  
}



  render() {

    return (

        <div className="App-resultado">
         
         
          <div className="resultado">{this.state.listapokemones[0].name}</div>
          
          

        </div>
        
    
    );
  }
}


export default App;
