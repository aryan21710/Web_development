import {createStore,combineReducers} from 'redux';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';



export default ()=>{
     const store = createStore(
         combineReducers({
             expense: expenseReducer,
             filters: filterReducer,
         })
     );
     return store;
}


    // export const store = createStore(
    //     combineReducers({
    //         expense: expenseReducer,
    //         filters: filterReducer,
    //     })
    // );
    
    //      console.log(store.getState());

