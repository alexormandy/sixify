import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <button> Home </button>
        <button> Browse </button>
        <button> Radio </button>
        <h3> Playlists </h3>

        <ul> Playlist 1</ul>
        <ul> Playlist 2</ul>
        <ul> Playlist 3</ul>

        <button> New Playlist </button>

        <div className="currentlyplayingartwork"> </div>
      </div>
    );
  }
}

export default Navbar;
