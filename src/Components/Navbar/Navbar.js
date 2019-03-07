import React, { Component } from "react";
import "./Navbar.css";
import logo from "./logo.svg";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <div className="navbar-Flex-Container">
          <div className="top-Nav-Section1">
            <div className="sixify-Logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="top-Nav-Section2">
            <div className="home">
              <button className="home-Button">Home</button>
            </div>
            <div className="search">
              <button className="search-Button">Search</button>
            </div>
            <div className="library">
              <button className="library-Button">Library</button>
            </div>
          </div>
          <div className="middle-Nav-Section1" />
          <div className="middle-Nav-Section2" />
          <div className="bottom-Nav">
            <div className="image-Container">Image Container</div>
            <div className="new-Playlist">
              <button className="new-Playlist-Button">New Playlist</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
