
import React from 'react';
import { Link } from 'react-router-dom';

export function GroupList() {

    return (
        <Link
			to={'/twitter'}
            >
            <div style={{color: '#484c55'}} className="card box-shadow m-5" >
                <div className="card-body text-center">
                    <h2 className="card-title">Group names Here</h2>
                    <p className="card-text">Placeholder for now</p>
                </div>
            </div>
        </Link>
    );
}
