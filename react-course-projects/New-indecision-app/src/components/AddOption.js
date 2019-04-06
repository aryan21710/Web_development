//#KEYWORDS:- [This app uses es6 classes new transform class property in which there is no need
//to  have constructor function to define the state variable and no need to bind the methods as
// it uses normal arrow function and not class methods except for react specific methods like
// render, life-cycle methods]

import React from 'react';

export default class AddOption extends React.Component {

    state={
        errMsg: undefined,
    }
    


    addInput=(e)=>{
        e.preventDefault();
        let value = e.target.elements.textInput.value;
        e.target.elements.textInput.value = '';
        if (value.length > 0) {
            value = value.trim();
            this.props.options(value);
            this.setState(() => {
                return {
                    errMsg: undefined,
                }
            })
        } else {
            this.setState(() => {
                return {
                    errMsg: true,
                }
            })
        }

    }

    render() {
        return (
            <div class='container'>
                <form  onSubmit={this.addInput}>
                    <div id='myForm'>
                            <input name='textInput'></input>
                            <button>Add Option</button>     
                    </div>
                    <div id="error">
                    {this.state.errMsg && 'PLEASE ENTER A VALID OPTION!!'}
                    </div>
                </form>
            </div>
        )

    }
}