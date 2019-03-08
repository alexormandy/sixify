import React, { Component } from 'react';
import Table from './Table'

class Artist extends Component {
    state = {}
    render() { 
        return (  
        <div>
            <h1>Artist</h1>
            <h1>Artist name</h1>
            <Table />
        </div>    
        );
    }
}
 
export default Artist;