import React, { Component } from 'react';
import Table from "./Table"

class Album extends Component {
    state = {  }
    render() { 
        return ( <div> 
            <h1> Album Name: </h1>
            <img src ="/images/album.jpg" />
            <p> Artist</p>
            <p> Year Songs Durations</p>
            <Table />
        </div>);
    }
}

export default Album;
 