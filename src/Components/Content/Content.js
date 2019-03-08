import React, { Component } from "react";
import "./Content.css";
import Toolbar from "../Search/Search";


class Content extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <div className="content-Flex-Container">
          <div className="top-Content">
            <div className="toolbar"><Toolbar /></div>
          </div>
          <div className="bottom-Content">
            <div className="playlist-Table"></div> 
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
