import React from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './Content.css'


const TableHeader = (props) => {
    return(
        <div className="table-header">
            <table>
                <tr>    
                    <th>Title</th>
                    <th>Artist</th> 
                    <th>Album</th>
                    <th>Released</th>
                    <th>Duration</th>
                </tr>
            </table>
        </div>
    );
}

export default TableHeader;


