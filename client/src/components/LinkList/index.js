
import React from 'react';
import { Link } from 'react-router-dom';

export function LinkList({ link }) {

    const { title, description, url } = link

    return (
        <Link
			to={url}
            >
            <div style={{color: '#484c55'}} className="card box-shadow m-5" >
                <div className="card-body text-center">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </Link>
    );
}