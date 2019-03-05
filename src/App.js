import React, { Component } from 'react';
import Navbar from  "./Components/Navbar/Navbar"; 
import Content from "./Components/Content/Content"; 
import Player from "./Components/Player/Player";

import './App.css';

class App extends Component { 
  render() {
    return (
      <div className="wrapper"> 
        <div className="grid-Container"> 
          <Navbar className="navbar" />  
          <Content className="content-Area" /> 
          <Player className="player-Control" /> 
        </div>  
      </div> 
     
    );
  }
}

export default App; 
