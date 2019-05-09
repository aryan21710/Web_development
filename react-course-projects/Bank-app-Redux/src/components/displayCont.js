import React from 'react';

export default (props) => {
    return ( 
        <div id="displayCont">
            <h3> 
            {props.amt >= 0 ? props.amt : alert('NO BALANCE')}
            </h3> 
            <p> Total Amount </p>
        </div>
    )
}
