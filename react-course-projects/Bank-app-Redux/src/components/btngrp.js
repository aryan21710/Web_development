import React from 'react';
import {withdraw10k, withdraw5k} from '../action/withdrawMoney'
import {connect} from 'react-redux';


// const ClickBtn =(props) => {
//     console.log('IN BTNGRP:');
//     return (
//          <div id = "btngrp">
//          <button id = "btn"
//          onClick={()=>{
//              console.log('INSIDE ONCLICK TO WITHDRAW 10K');
//             props.dispatch(withdraw10k(10000))
//          }}>
//          WithDraw $10000
//          </button>
//          <button>WithDraw $5000</button>
//         </div>
//     )
// }

// OR
// SOLUTION 2

const ClickBtn =(props) => {
    console.log('IN BTNGRP:');
    return (
         <div id = "btngrp">
         <button id = "btn"
         onClick={()=>{
             console.log('INSIDE ONCLICK TO WITHDRAW 10K');
            props.dispatch(withdraw10k())
         }}>
         WithDraw $10000
         </button>
         <button
            onClick={()=>{
             console.log('INSIDE ONCLICK TO WITHDRAW 10K');
            props.dispatch(withdraw5k())
         }}>
         
         >WithDraw $5000</button>
        </div>
    )
}


export default connect()(ClickBtn)







