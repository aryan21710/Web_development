import React from 'react';
import ReactDOM from 'react-dom';
import  '../styles/styles.css'
import Header from './components/header';
import DisplayCont from './components/displayCont';
import BtnGrp from './components/btngrp';

class Template extends React.Component {
   
    constructor(props) {
        super(props)
        this.state= {
            amount: 50000,
        }
        this.withdraw10k=this.withdraw10k.bind(this);
                this.withdraw5k = this.withdraw5k.bind(this);

    }

    withdraw10k() {
        console.log('i am called');
        this.setState((prevState)=>{
        return {
            amount: Number(prevState.amount) >= 10000 ? 
            Number(prevState.amount)-10000 : 
            Number(prevState.amount)
        } 
        })
    }


    withdraw5k() {
        console.log('i am called');
        this.setState((prevState) => {
            return {
                amount: Number(prevState.amount) >= 5000 ?
                    Number(prevState.amount) - 5000:
                     Number(prevState.amount)
            }
        })
    }


    render() {
          return ( 
              <div>
                <Header/>
                <DisplayCont amt = {this.state.amount}/>
                <BtnGrp 
                withdraw10k={this.withdraw10k}
                withdraw5k = {
                    this.withdraw5k
                }
                />
              </div>
          )
    }
}


const renderMyApp= ()=> {
    return ReactDOM.render(<Template/> , document.getElementById('app'));
}

renderMyApp();



