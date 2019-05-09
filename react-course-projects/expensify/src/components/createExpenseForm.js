import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class CreateExpenseForm extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        description: props.expense? props.expense.description : '',
        note: props.expense ? props.expense.note : '',
        amount: props.expense ? (props.expense.amount).toString() : '',
        createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
        calFocussed: true,
        error: ''
    }

    }



    submitExpense=(e)=>{
        e.preventDefault();
        if (this.state.description && this.state.amount) {
             this.setState({
                 error: ''
             })
             this.props.onSubmit({
                 description: this.state.description,
                 amount: parseFloat(this.state.amount,10), // AMOUNT IS SENT UP IN FORM OF CENTS AND NOT DOLLARS THATS WHY * 100
                 note: this.state.note,
                 createdAt: this.state.createdAt.format("Do MMM YYYY")
             })
        } else {
            this.setState({
                error: 'Please Enter a Valid Description or Amount to Proceed'
            })
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitExpense}>
                {this.state.error && <p>{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={(e)=>{
                        console.log(e.target.value);
                        this.setState({description: e.target.value})
                    }}
                >
                </input>
                <input
                    type="number"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={(e)=>{
                        //#KEYWORDS:- [use of regexp using regex101.com]
                        const output=e.target.value.match(/^\d*\.?\d{0,2}$/)
                        output && this.setState({amount: e.target.value})

                    }}
                >
                </input>
                <br></br>
                <textarea
                placeholder="Enter a Note(Optional)"
                value={this.state.note}
                onChange={(e)=>{
                    this.setState({note:e.target.value})
                }}>
                </textarea>
                <br></br>
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
                <br></br>
                <button>Add Expense</button>
                </form>
                
            </div>
        )
    }
}

