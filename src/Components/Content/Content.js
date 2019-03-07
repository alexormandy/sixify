import React, { Component } from "react";
import "./Content.css";
import Toolbar from "../Toolbar/Toolbar";

import Table from "./Table";

class Content extends Component {
  state = {};g
  render() {
    return (
      <div className="content">
        <Toolbar />
        <Table />
      </div>
    );
  }
}

export default Content;
