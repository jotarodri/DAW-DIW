import React, { Component } from 'react';
import letra from './imgs/pokemon.png';
import logo from './imgs/pokeball.png';

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
  function volverArriba() {

    window.scrollTo(0, 0); 
  
  }

  export default Header;