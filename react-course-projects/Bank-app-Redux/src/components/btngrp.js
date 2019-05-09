import React from 'react';

export default (props) => {
    console.log(JSON.stringify(props));
    return (
         <div id = "btngrp">
         <button id = "btn"
         onClick = {
             props.tenK
         }>
         WithDraw $10000
         </button>
         <button>WithDraw $5000</button>
        </div>
    )
}


