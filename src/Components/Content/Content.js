import React, { Component } from "react";
import "./Content.css";
import Search from "./Search";
import Table from "./Table";


class Content extends Component {
  state = {};
  render() {
    return(
    <div className="content">
      <Search />
      <Table />
      
    </div>
    ) 
  }
}

export default Content;
