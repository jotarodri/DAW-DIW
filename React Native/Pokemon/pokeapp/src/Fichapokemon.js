import React, { Component } from 'react';
import  './style/Fichapokemon.css';
import volver from './imgs/volver.png';
import Resultado from './Resultado';
import Busqueda from './Busqueda';

class Fichapokemon extends Component{

    constructor(props){
      super(props);
      this.state = {
        datos:[],
        descripcionPoke:"No hay descripcion",
        atras: false,
       
       };
    }

      
  async componentDidMount(){
   
    let fetchPokemon = await fetch(this.props.datosPokemon.species.url);
    let listaPokemon = await fetchPokemon.json();

   
        
    this.setState({
        datos: listaPokemon,
        descripcionPoke: "No hay descripcion"
   })

      listaPokemon.flavor_text_entries.map(descripcion => 
     
        {descripcion.language.name === "es"  ?this.setState({descripcionPoke: descripcion.flavor_text})
        : console.log("no es españa");
        }
       
        
        )
   
  }
  crearTipos() {

    if (this.props.datosPokemon.types[0].slot === 2) {

        return (
            <div className="tipos">
                <img src={"https://veekun.com/dex/media/types/en/" + this.props.datosPokemon.types[0].type.name + ".png"} height="30" width="40" /> 
                <img src={"https://veekun.com/dex/media/types/en/" + this.props.datosPokemon.types[1].type.name + ".png"}  height="30" width="40"/>

            </div>
        )


    } else {

        return (
            <div className="tipos">
                <img src={"https://veekun.com/dex/media/types/en/" + this.props.datosPokemon.types[0].type.name + ".png"} height="30" width="40" />
            </div>

        )
    }
}
cambiarEstado = () => {

  this.setState({atras:true})
}

    
    render(){

      if (!this.state.atras) {
        return(
          <div className="App-ficha">
          <div className="fichaPokemon">
           
            <div className="headerFicha">
           {console.log(this.state)}
           {console.log(this.props)}
            <h1>{this.props.nombrePokemon.toUpperCase()}</h1>
          <img className="imgPokemon" src={this.props.datosPokemon.sprites.front_default} height="150" width="150"></img>
          <img className="imgVolver" src={volver} height="50" width="50" onClick={this.cambiarEstado}></img>
          
  
          </div>
  
          
  
          <div className="numeroPokedex">
  
        <h1>Nº Pokedex: #{this.state.datos.id}</h1>
  
          </div>
          {this.crearTipos()}
          <div className="descripcionPokemon">
  
          <h1>DESCRIPCION</h1>
  
         <p className ="descripcion">
  
         {this.state.descripcionPoke===undefined  ? console.log("Es undefined")
          : this.state.descripcionPoke}
  
         </p>
  
          </div>
  
          <div className="PesoYaltura">
  
          <h1>Altura: {this.props.datosPokemon.height/10}m</h1>
          <p className="espacio">aaaaa</p>
          
          <h1>Peso: {this.props.datosPokemon.weight/10}kg</h1>
  
          </div>
          
          </div>
          </div>
        )
      }else{
        return (
        <Busqueda/>,
        <Resultado />
        )
      }
   
    }
  }


    



export default Fichapokemon;