import React from 'react';
import BarChart from '../BarChart'


export default function DataList({ data, label, title }) {

    return (
        <div className="card box-shadow m-5">
            <div className="card-body text-center">
                <BarChart data={data}  title={title}
                />
                <p className="card-text">{label}</p>
            </div>
        </div>
    );
}