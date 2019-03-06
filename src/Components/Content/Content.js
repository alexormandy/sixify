import React, { Component } from "react";
import "./Content.css";
import Toolbar from "../Search/Search";

import Table from "./Table";



class Content extends Component {
  state = {};
  render() {
    return(
    <div className="content">
       <Toolbar />
      <Table />
      
    </div>
    ) 

  }
}

export default Content
