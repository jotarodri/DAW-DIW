import React, { Component } from 'react';

import  './style/App.css';
import Header from './Header';
import Resultado from './Resultado';
import Busqueda from './Busqueda';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Busqueda/>
        <Resultado/>
        
    </div>
    
    );
  }
}


export default App;
