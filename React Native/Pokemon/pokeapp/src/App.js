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
     listapokemones:[],
     mostrar:true,
     pokemon:null
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

const onclick = (pokemon) => {
  this.setState({pokemon:pokemon})
  this.setState({mostrar:!this.state.mostrar})
}

}
 
  render() {
    //let pokemon;
    if(this.state.mostrar){
      return(
      <div className="App-resultado">
        {console.log("Estado refrescado")}
        {this.state.listapokemones.map(pokemon => {
          return (<DivPokemons onclick={this.onclick} datosPokemon={pokemon}/>)
        })}
    
    </div>
    )
    }else{
      return(
        <div className="App-resultado">
          <Fichapokemon pokemon={pokemon} listaPokemon={this.state.listapokemones} />
        </div>
      )
    
    
  }
}

class Fichapokemon extends React.Component{

  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>{this.props.pokemon.name}</div>
    )
  }
  

  }
 }

 class DivPokemons extends React.Component{

  click = ()=>{
    this.props.onclick(this.props.datosPokemon)
  }

 
  render() {
    console.log(this.props.datosPokemon);

    return (

      
      <div className="pokemon" key = {this.props.datosPokemon.name}  onClick={this.click}>    
      {console.log(this.props)}  
      <p>{this.props.datosPokemon.name.toUpperCase()}</p>
      
      <img src={this.props.datosPokemon.sprites.front_default} height="100" width="100"></img>
          
      </div>

   );
 
  }
 }


function volverArriba() {

  window.scrollTo(0, 0); 

}
/*
function mostrarFicha() {

 let ficha = document.getElementsByClassName("App-fichaPokemon")[0];
 ficha.classList.add("visible");

}*/

export default App;
