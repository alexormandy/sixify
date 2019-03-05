import React, { Component } from "react";
import "./Navbar.css";
import logo from './logo.svg'

class Navbar extends Component {
  state = {};
  render() {
    return (
        <div className="navbar">
            <img src={logo}></img> 
        </div>
    ); 
  }
}

export default Navbar;
