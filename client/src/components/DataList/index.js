import React from 'react';

export default function DataList({ header }) {

    return (
        <div className="card box-shadow m-5">
            <div className="card-body text-center">
                <h2 className="card-title">{header}</h2>
                <p className="card-text">Placeholder for now</p>
            </div>
        </div>
    );
}