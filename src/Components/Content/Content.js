import React, { Component } from "react";
import "./Content.css";
import Toolbar from "../Toolbar/Toolbar";
//import Playlist from "../Playlist/Playlist";
import Album from "../Album/Album";
// import Artist from "../Artist/Artist";


class Content extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <Toolbar />
        <Album /> 
        {/* <Artist /> */}

      </div>
    );
  }
}

export default Content;
