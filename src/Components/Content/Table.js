import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './Content.css'


class Table extends Component {

    state = {
        columnDefs: [
            { headerName: "Title", field: "title" },
            { headerName: "Artist", field: "artist" },
            { headerName: "Album", field: "album" },
            { headerName: "Released", field: "released" },
            { headerName: "Duration", field: "duration" }



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
            style={{ height: '800px', width: '900px'}}
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


