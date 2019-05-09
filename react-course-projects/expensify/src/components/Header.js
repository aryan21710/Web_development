
import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1> EXPENSIFY APP</h1>
            <NavLink to='/' activeClassName='is-active' exact={true}>HOME PAGE</NavLink>
            <NavLink to='/create' activeClassName='is-active'>CREATE PAGE</NavLink>
            <NavLink to='/help' activeClassName='is-active'>HELP PAGE</NavLink>
        </div>
    )
}

export default Header;