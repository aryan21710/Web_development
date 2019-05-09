import React from 'react';
import CreateExpenseForm from './createExpenseForm';
import {connect} from 'react-redux';
import { addExpense,editExpense,removeExpense } from '../action/expenses';

const EditExpensePage = (props) => {
    // console.log('props in EDITEXPENSEPAGE:-'+JSON.stringify(props,null,4))
    return (
        <div>
            <CreateExpenseForm 
            expense={props.expenses}
            onSubmit={(expense)=>{
                props.dispatch(editExpense(props.expenses.id,expense))
                props.history.push('/');
            }}/>
            <button onClick={()=>{
                  console.log('REMOVE EXPENSE:-' + props.expenses.id);
                  props.dispatch(removeExpense(props.expenses.id))
                  props.history.push('/');
              }}>
              Remove Expense
            </button>
        </div>
    )
}


const mapStateToProps=(state,props)=>{
    return {
         expenses: state.expense.find((exp) => {
             return exp.id === props.match.params.id
         })

    }
         
    
  

}


export default connect(mapStateToProps)(EditExpensePage)