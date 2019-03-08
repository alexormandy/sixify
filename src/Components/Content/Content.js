import React, { Component } from "react";
import "./Content.css";
import Toolbar from "../Search/Search";

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
      </div>
    );
  }
}

export default Content;
