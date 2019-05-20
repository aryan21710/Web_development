import React from 'react';
import {NavLink} from 'react-router-dom';

export default ()=>{
    return (
		<div className="header">
			<div className="logoHeader">
				<img src={require('./../../public/images/mylogo.png')} /> <h1>StaRt.. A Status Reporting Tool</h1>
			</div>
			<div className="navLinks">
				<NavLink to="/" activeClassName="is-active" exact={true}>
					<button>Create</button>
				</NavLink>
				<NavLink to="/View" activeClassName="is-active">
					<button>View</button>
				</NavLink>
			</div>
		</div>
	);
}