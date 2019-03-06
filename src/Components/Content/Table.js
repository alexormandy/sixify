import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './Content.css'


class Table extends Component {

    state = {
        columnDefs: [
            { headerName: "Title", field: "title", width: 300 },
            { headerName: "Artist", field: "artist", width: 300 },
            { headerName: "Album", field: "album", width: 300 },
            { headerName: "Released", field: "released", width: 200, },
            { headerName: "Duration", field: "duration", width: 100 }



        ],
        rowData: [
            { title: "Wow", artist: "Post Malone", album: "", released: "2018-12-24", duration: "2:30" },
            { title: "Wow", artist: "Post Malone", album: "", released: "2018-12-24", duration: "2:30" },
            { title: "Wow", artist: "Post Malone", album: "", released: "2018-12-24", duration: "2:30" },
            { title: "Wow", artist: "Post Malone", album: "", released: "2018-12-24", duration: "2:30" },
            { title: "Wow", artist: "Post Malone", album: "", released: "2018-12-24", duration: "2:30" },
            { title: "Wow", artist: "Post Malone", album: "", released: "2018-12-24", duration: "2:30" },
            { title: "Wow", artist: "Post Malone", album: "", released: "2018-12-24", duration: "2:30" },
            { title: "Wow", artist: "Post Malone", album: "", released: "2018-12-24", duration: "2:30" },

           
            
        ]
    }



render() {
    return (
        <div
            className="playlist"
            style={{ height: '800px', width: '100%'}}
        >
            <AgGridReact
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}>
            </AgGridReact>
        </div>
    );
}

}

export default Table;

