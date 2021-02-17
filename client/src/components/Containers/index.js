import React from 'react';
import BarChart from '../BarChart';
import PieChart from '../PieChart'

export const BarContainer = ({ data, label, title }) => {
	return (
		<div className="card box-shadow m-5">
			<div className="card-body text-center">
				<BarChart data={data} title={title} 
                 />
				<p className="card-text">{label}</p>
			</div>
		</div>
	);
};

export const PieContainer = ({ data, label, title }) => {
	return (
		<div className="card box-shadow m-5" >
                <PieChart data={data} title={title} 
                 />
                 <div className="card-img-top">
				<div className="card-body">
					<p className="card-text">
						{label}
					</p>
				</div>
			</div>
		</div>
	);
};
