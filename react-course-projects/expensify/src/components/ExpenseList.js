import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getStateChanges from '../selectors/getvisiblechanges';



const ExpenseList=(props) => {
    // console.log('props.expenses:-'+JSON.stringify(props.expenses));
    return (
        <div>
            {props.expenses && props.expenses.map((exp,ind)=>{
                return <ExpenseListItem key={ind} {...exp}/>
            })} 
        </div>
    )
    
}

const stateToProps= (state) => {
        // console.log('inside ExpenseList:-' + JSON.stringify(getStateChanges(state.expense, state.filters), null, 4))
    return {
       expenses: getStateChanges(state.expense, state.filters),
    }

}
export default connect(stateToProps)(ExpenseList)

