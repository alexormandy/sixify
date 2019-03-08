import React, { Component } from "react";
import "./Content.css";
import Toolbar from "../Search/Search";
<<<<<<< HEAD
import Search from "../Search/Search";
import Table from "./Table";
=======

>>>>>>> master

class Content extends Component {
  state = {};
  render() {
    return (
      <div className="content">
<<<<<<< HEAD
        <Search />
        <Table />
        <Toolbar />
      </div>
=======

          <div className="top-content">

            <div className="toolbar"><Toolbar /></div>

          </div>

          <div className="bottom-content">

            <div className="playlist-Table"></div> 
            
          </div>

        </div>
>>>>>>> master
    );
  }
}

export default Content;
