import React, { Component } from "react";
import "./Content.css";
import Toolbar from "../Search/Search";
import TableHeader from './TableHeader';
import Table from "./Table";

class Content extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <Toolbar />
        <TableHeader />
        <Table title="Oli" artist="Holyrod" album="Nice" released="Today" duration="5 seconds" />
        <Table title="Rubbish at 8 ball pool" artist="Briony Houghton" album="No idea" released="Today" duration="1 second" />
        <Table title="Kieran is the best at 8 ball pool" artist=":)" album="nice" released="Today" duration="5 seconds" />
      </div>
    );
  }
}

export default Content;
