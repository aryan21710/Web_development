
import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1> PORTFOLIO APP</h1>
            <NavLink to='/' activeClassName='is-active' exact={true}>HOME</NavLink>
            <NavLink to='/portfolio' activeClassName='is-active'>PORTFOLIO</NavLink>
            <NavLink to='/contact' activeClassName='is-active'>CONTACT</NavLink>
        </div>
    )
}

export default Header;