import React, { Component } from "react";
import "./Navbar.css";
import logo from "./logo.svg";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <div className="top-nav">
          <div className="nav-logo">
            <img src={logo} />
          </div>

          <div className="nav-menu">
              <button className="nav-button">Home</button>
              <button className="nav-button">Search</button>
              <button className="nav-button">Library</button>
          </div>
        </div>


          <div className="bottom-Nav"> 
            <div className="image-Container">Image Container</div>
<<<<<<< HEAD
            <div className="gi new-Playlist">
              <button className="new-Playlist-Button">New Playlist</button>
            </div>
=======
            <button className="nav-button">New Playlist</button>
>>>>>>> master
          </div>
         
      </div>
    );
  }
}

export default Navbar;
