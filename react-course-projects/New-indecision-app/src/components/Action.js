import React from 'react';


export default class Action extends React.Component {
    constructor(props) {
        super(props);
        this.randomOption = this.randomOption.bind(this);
    }
    randomOption() {
        this.props.showOption();
    }

    render() {
        return (
            <div class='container'>
                <div class='btnContainer'>
                    <button id='selectOption'
                        disabled={this.props.options.length == 0} 
                        onClick={this.randomOption}>
                        Select an Option for Me
                     </button>
                </div>   
                <div class='removeAll'>
                    <span>Your Options</span>
                     <button onClick={this.props.removeAllFunc}>Remove All</button>
                </div>     
            </div>
        )

    }
}