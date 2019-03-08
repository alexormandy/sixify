import React, { Component } from "react";
import "./Content.css";
import Toolbar from "../Toolbar/Toolbar";


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
