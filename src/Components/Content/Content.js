import React, { Component } from "react";
import "./Content.css";
import Search from "./Search"

class Content extends Component {
  state = {};
  render() {
    return(
    <div className="content">
      <Search />
    </div>
    ) 
  }
}

export default Content;
