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
        <Fichapokemon/>
        <Resultado />
        
    </div>
    
    );
  }
}

class Header extends Component {
  
  
  render() {
    return (
  
        <div className="App-header" onClick={volverArriba}>
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
          return(  <div className="pokemon" onClick={mostrarFicha}>    
           
           <p>{pokemon.name.toUpperCase()}</p>
           
           <img src={pokemon.sprites.front_default} height="100" width="100"></img>
               
              </div>)
            })}
        
        </div>

    );
  }
}

class Fichapokemon extends React.Component{

  constructor(props){
    super(props);
    this.state = {
     nombrePokemon:this.props.listapokemones,
     tipo1:"",
     tipo2:"",
     descripcion:"",
  
    }
  }

  render() {

      
    return (

      <div className="App-fichaPokemon">
       
        

      </div>
      
  
  );

  }


  }


function volverArriba() {
  /*console.log("gaston")
  let header=document.getElementsByClassName("App-header");
  header.scrollTop="0px";*/
  window.scrollTo(0, 0); 

}

function mostrarFicha(e) {
  
}

export default App;
