import React, { Component } from 'react';
import usuarios from './datos';
import Usuario from './componentes/usuario';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props){
      super(props),
      this.state = {
         usuarios,

      };
     }


  render() {
    const { usuarios } = this.state;
    return (
      <main>
     
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Listado de Usuarios</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      {usuarios.map( (usuario) => <Usuario datos ={usuario} />) }
      </main>
    );
  }
}

export default App;
