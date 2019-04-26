import React from 'react';

export default (props) => {
    return (
         <div id = "btngrp">
         <button id="btn" onClick=
         {props.withdraw10k}>
         WithDraw $10000
         </button>
         <button onClick={props.withdraw5k}>WithDraw $5000</button>
        </div>
    )
}


