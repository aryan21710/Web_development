import React from 'react';
import {connect} from 'react-redux';

 const DisplayCont= (props) => {
    console.log('INSIDE DISPLAYAMT:-'+JSON.stringify(props));
    return ( 
        <div id="displayCont">
            <h3> 
            {props.amount >= 0 ? props.amount : 'LOW BALANCE'}
            </h3> 
            <p> Total Amount </p>
        </div>
    )
}


// const mapStateToProps=(state)=>{
//     console.log('inside mapstateprops:-'+JSON.stringify(state));
//     return {
//             amount: state
//     }
// }

// OR

// SOLUTION 2


const mapStateToProps = (state) => {
    console.log('inside mapstateprops:-' + JSON.stringify(state));
    return {
        amount: state.amount
    }
}

export default connect(mapStateToProps)(DisplayCont)

