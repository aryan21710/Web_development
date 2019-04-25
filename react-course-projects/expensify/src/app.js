import React from 'react';
import ReactDOM from 'react-dom';
import Approutes from './routers/Approutes';
import  '../styles/_styles.scss';
import configStore from './store/configStore';
import { addExpense } from './action/expenses';
import getStateChanges from './selectors/getvisiblechanges'
import {setTextFilter,setStartDate, sortByDate,sortByAmount} from './action/filters';


const store = configStore();

store.subscribe(()=>{
     const state = store.getState();

     const visibleChanges = getStateChanges(state.expense, state.filters);
     if (visibleChanges != undefined) {
         console.log('SETTING FILTER ');
         Object.keys(visibleChanges).length > 0 ?
             console.log('FILTERED DATA:-' + JSON.stringify(visibleChanges, null, 4)) :
             console.log('NO FILTERED DATA FOUND');
         console.log(store.getState());
     } else {
             console.log(store.getState());

     }
})

store.dispatch(addExpense({amount: 1000, description: 'Mobile Bill', note:
' Paid Mobile bill for April', createdAt: 3000}));

let exp1 = store.dispatch(addExpense({
    amount: 20500,
    description: 'RENT BILL',
    note: 'APRIL MONTH RENT',
    createdAt: 10000
}));

const exp2 = store.dispatch(addExpense({
    amount: 1500,
    description: 'CLOTHES BILL',
    note: 'ZARA TEES',
    createdAt: 900
}));


const exp3 = store.dispatch(addExpense({
    amount: 8000,
    description: 'BIKE SERVICE BILL',
    note: 'RE 1st BIKE SERVICE',
    createdAt: 9000
}));


store.dispatch(setTextFilter('bill'));
store.dispatch(setStartDate(2000));
store.dispatch(sortByDate('date'));
store.dispatch(sortByAmount('amount'));

ReactDOM.render(<Approutes />,document.getElementById('app'));
