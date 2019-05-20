import React from 'react';
import ReactDOM from 'react-dom';
import Approutes from './routers/Approutes';
import {Provider} from 'react-redux';
import  '../styles/_styles.scss';
import store from './store/configStore';
import { addExpense, removeExpense, removeAllExpense } from './action/expenses';
import getStateChanges from './selectors/getvisiblechanges'
import {setTextFilter,setStartDate, sortByDate,sortByAmount} from './action/filters';

// console.log(configStore);
// const store = configStore;

store.subscribe(()=>{
     const state = store.getState();
     console.log('LATEST STATE:-'+JSON.stringify(state,null,4));

     const visibleChanges = getStateChanges(state.expense, state.filters);
})

store.dispatch(addExpense({amount: 1000, description: 'Mobile Bill', note:
' Paid Mobile bill for April', createdAt: 3000}));

let exp1 = store.dispatch(addExpense({
    amount: 20500,
    description: 'RENT BILL',
    note: 'APRIL MONTH RENT',
    createdAt: 1000
}));


const exp2 = store.dispatch(addExpense({
    amount: 1500,
    description: 'CLOTHES BILL',
    note: 'ZARA TEES',
    createdAt: 900
}));


const exp3 = store.dispatch(addExpense({
    amount: 5000,
    description: 'CAR FUEL',
    note: 'APRIL CAR FUEL BILL',
    createdAt: 1200
}));

// console.log('exp1:-'+JSON.stringify(exp1));
const exp4 = store.dispatch(addExpense({
    amount: 8000,
    description: 'BIKE SERVICE BILL',
    note: 'RE 1st BIKE SERVICE',
    createdAt: 9000
}));


// store.dispatch(setTextFilter('CAR'));
// setTimeout(()=>{
//     store.dispatch(removeExpense(exp1.expense.id));
// },3000)
// store.dispatch(setStartDate(2000));
// store.dispatch(sortByDate('date'));
// store.dispatch(sortByAmount('amount'));


const jsx=(
    <Provider store={store}>
        <Approutes/>
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));
