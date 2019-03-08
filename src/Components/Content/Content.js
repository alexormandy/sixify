import React, { Component } from "react";
import "./Content.css";
import Toolbar from "../Search/Search";
//import Playlist from "./Playlist/Playlist";
//import Album from "./Album";
import Artist from "./Artist";


class Content extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <div className="top-content">
          <div className="toolbar">
            <Toolbar />
          </div>
        </div>

        <div className="bottom-content">
          <div className="playlist-Table" />
        </div>

        <Toolbar />
        {/* <Album />  */}
        <Artist />

      </div>
    );
  }
}

export default Content;
