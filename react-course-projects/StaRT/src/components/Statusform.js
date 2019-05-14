import React from 'react';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import moment from 'moment';


 export default class StatusForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createdAt: moment(),
            calFocussed: true,
            text: '',
            category:'Choose Category'
        }
    }

    Submit=(e)=>{
        e.preventDefault();
        this.props.onSubmit({
             createdAt: this.state.createdAt,
             text: this.state.text,
            category: this.state.category
        })
    }

    render() {
        return (
            <div className="main">
                <div className="create">
                <form class="myForm" onSubmit={this.Submit}>
                        <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={
                                (createdAt)=>{
                                createdAt && this.setState({createdAt})
                            }}
                            focused={this.state.calFocussed}
                            onFocusChange={({ focused }) => { this.setState({ calFocussed:focused }); }}
                            numberOfMonths={1}
                            isOutsideRange={()=>false}
                            >
                        </SingleDatePicker>
                        
                        <select class="options" onChange={(e)=>{
                            this.setState({category:e.target.value})
                        }}>
                            <option value="React">React</option>
                            <option value="Javascript">Javascript</option>
                            <option value="Resume">Resume</option>
                            <option value="Css animation">Css animation</option>
                            <option value="Choose Category" selected>Choose Category</option>
                        </select>

                        <textarea placeholder="ENTER STATUS REPORT" value={this.state.text} onInput={(e)=>{
                        
                             this.setState({text: e.target.value})
                        }}>
                        </textarea>

                        <button> Submit Report
                        </button>
                </form>
                
                </div>
            </div>
        )
    }
}
