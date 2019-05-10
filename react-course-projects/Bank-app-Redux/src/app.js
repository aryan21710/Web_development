import React from 'react';
import ReactDOM from 'react-dom';
import  '../styles/styles.css'
import Header from './components/header';
import DisplayCont from './components/displayCont';
import BtnGrp from './components/btngrp';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// const withdrawReducer=((state,action)=>{
//     switch (action.type) {
//         case 'WITHDRAW_10K':
//         console.log('INSIDE WITHDRAW_10K SWITCH STATEMENT');
//          state-=action.payload
//          return state

//             // return {
//             //     amount: state.amount-10000
//             // }
//         default:
//             return state
//     }
// })

// OR

// SOLUTION 2

const withdrawReducer = ((state={amount:125000}, action) => {
    switch (action.type) {
        case 'WITHDRAW_10K':
            console.log('INSIDE WITHDRAW_10K SWITCH STATEMENT');
            return {
                amount: state.amount-10000
            }
        case 'WITHDRAW_5K':
        console.log('INSIDE WITHDRAW_5K SWITCH STATEMENT');
        return {
            amount: state.amount - 5000
        }
        default:
            return state
    }
})

// const store = createStore(
//     withdrawReducer,
//     125000,
//      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// OR 

// SOLUTION 2
const store = createStore(
    withdrawReducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



store.subscribe(()=>{
    const state=store.getState();
    console.log('LATEST STATE:-'+JSON.stringify(state));
})

const Template=()=>{
    return ( 
              <div>
                <Header/>
                <DisplayCont/>
                <BtnGrp/>
              </div>
          )
}
 

const jsx=(
    <Provider store={store}>
        <Template/>
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));



