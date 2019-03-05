import React, { Component } from "react";
import "./Navbar.css";
import logo from './logo.svg'

class Navbar extends Component {
  state = {};
  render() {
    return (
        <div className="navbar">
            <div className="sixify-Logo"><img src={logo}></img></div>
            <div className="home"><button className="home-Button">Home</button></div>
            <div className="search"><button className="search-Button">Search</button></div>
            <div className="library"><button className="library-Button">Library</button></div>
            <div className="image-Container">Image Container</div>
            <div className="new-Playlist"><button className="new-Playlist-Button">New Playlist</button></div>
          
        </div>
    ); 
  }
}

export default Navbar; 
