import React from 'react';
import ReactDOM from 'react-dom';
import  '../styles/styles.css'
import Header from './components/header';
import DisplayCont from './components/displayCont';
import BtnGrp from './components/btngrp';
import {createStore} from 'redux';

const amount = 125000;

const reducer=(state={amount},action)=>{
    switch (action.type) {
        case 'WITHDRAW_10K':
        console.log('INSIDE WITHDRAW_10K SWITCH STATEMENT');
            return {
                state: state.amount-action.amount
            }
        default:
        return state
    }
}

const store = createStore(reducer)

const withdraw10k = () => {
    console.log('withdraw10k action generator is called');
    return ({
        type: 'WITHDRAW_10K',
        amount
    })
}




store.subscribe(()=>{
    const state=store.getState();
    console.log('LATEST STATE:-'+JSON.stringify(state));
})

class Template extends React.Component {
    render() {
          return ( 
              <div>
                <Header/>
                <DisplayCont amt={amount}/>
                <BtnGrp tenK = {store.dispatch(withdraw10k(amount))}/>
              </div>
          )
    }
}


const renderMyApp= ()=> {
    return ReactDOM.render(<Template/> , document.getElementById('app'));
}

renderMyApp();



