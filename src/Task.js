import React, { useState, useEffect } from "react"
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';

const Task = () => {
    const [text, headingLabel] = useState('Risk Category Summary');
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        axios.get('data.json').then(
            res => {
                console.log(res.data.defaultReport.aggregated.items);
                setRowData(res.data.defaultReport.aggregated.items)
            }
        ).catch(err => console.log(err))
    }, [])

    return (

        <div className="ag-theme-alpine" style={{ height: '220px', width: '1003px' }}>
            <h1>{text}</h1>
            <AgGridReact
                rowData={rowData}>
                <AgGridColumn field="category" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="impactPercent" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="high" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="medium" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="low" sortable={true} filter={true}></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default Task;