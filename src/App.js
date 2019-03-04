import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Player from "./Components/Player/Player";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Content />
        <Player />
      </div>
    );
  }
}

export default App;
