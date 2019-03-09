import React, { Component } from "react";
import "./Content.css";
import Toolbar from "../Toolbar/Toolbar";
import Album from '../Album/Album';
// import Artist from '../Artist/Artist';
// import Playlist from '../Playlist/Playlist';


class Content extends Component {
  render() {
    return (
      <div className="content">
        <Toolbar />
        <Album /> 
        {/* <Artist /> */}
        {/* <Playlist /> */}
      </div>
    );
  }
}

export default Content;
