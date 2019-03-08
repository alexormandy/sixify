import React, { Component } from 'react';
import Table from "./Table";


class Album extends Component {
    state = {};
    render() { 
        return ( 
        <div className="album-info">
            <img src ="./Content/images/album.jpg" height="200px" width="200px" />
            <h1> Album Name: </h1>
            <p> Artist</p>
            <p> Year Songs Durations</p>
            <Table title="Oli" duration="5 seconds" like="yes"/>
        </div>);
    }
}

export default Album;
 