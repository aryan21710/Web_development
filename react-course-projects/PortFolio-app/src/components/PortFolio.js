import React from 'react';
import {Link} from 'react-router-dom';

const PortFolio = (props) => {
    console.log('props:-' + JSON.stringify(props));
    console.log(props.match.params.id);
    return (
        <div>
            <h1>My Work</h1>
            <Link to='/portfolio/1'>Item1</Link>
            <Link to='/portfolio/2'>Item2</Link>
        </div>
    )
}


export default PortFolio;