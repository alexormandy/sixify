import React, { Component } from "react";
import "./Content.css";
import Toolbar from "./Toolbar/Search/Search";
//import Playlist from "./Playlist/Playlist";
//import Album from "./Album";
import Artist from "./Artist";


class Content extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <Toolbar />
        {/* <Album />  */}
        <Artist />

      </div>
    );
  }
}

export default Content;
