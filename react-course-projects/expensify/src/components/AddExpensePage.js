import React from 'react';
import CreateExpenseForm from './createExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../action/expenses'
// #KEYWORDS:- DATA WHEN SUBMITTED IN A FORM IN A  child Component "CreateExpenseForm" IS SENT BACK UP TO Parent component "AddExpense".


const AddExpensePage = (props) => {
    return (
        <div>
            <p>Welcome to My AddExpensePage PAGE</p>
            <CreateExpenseForm onSubmit={(individualExp)=>{
                console.log('expense dispatched from CreateExpenseForm  :-' + JSON.stringify(individualExp,null,4));
                props.dispatch(addExpense(individualExp));
            //#KEYWORDS:- [BELOW push will redirect the page to the path specified between ''. The path should be a valid path as per the Approutes.js]
                props.history.push('/')
            }}/>
        </div>
     
    )
}


export default connect()(AddExpensePage)

