import React from 'react';
import BarChart from '../BarChart'


export default function DataList({ data, label }) {

    return (
        <div className="card box-shadow m-5">
            <div className="card-body text-center">
                <BarChart data={data}  
                />
                <p className="card-text">{label}</p>
            </div>
        </div>
    );
}