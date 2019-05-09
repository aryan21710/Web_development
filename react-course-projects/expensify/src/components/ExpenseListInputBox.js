import React from 'react';
import {connect} from 'react-redux';
import {
    setTextFilter,
    sortByDate,
    sortByAmount
} from '../action/filters'
import getStateChanges from '../selectors/getvisiblechanges';



const ExpenseListInputBox= (props) => {
    return ( 
        <div>
            <input type='text' value={props.filters.text}
             onChange={(e)=>{
                 props.dispatch(setTextFilter(e.target.value));
             }}/>
             <select value={props.filters.sortBy}
             onChange = {(e) => {
                 e.target.value=='date' ?
                 props.dispatch(sortByDate(e.target.value)):
                 props.dispatch(sortByAmount(e.target.value))
            }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
             </select>
        </div>
    )
}

const mapStateToProp=(state)=>{
    return {
       expenses: getStateChanges(state.expense, state.filters),
       filters: state.filters
}

}

export default connect(mapStateToProp)(ExpenseListInputBox)

 

 