import {createStore,combineReducers} from 'redux';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

// export default ()=>{
//      const store = createStore(
//          combineReducers({
//              expense: expenseReducer,
//              filters: filterReducer,
//          })
//      );
//      return store;
// }

// USE import import configStore from './store/configStore';
// const store=configStore();

// OR


     export default createStore(
        combineReducers({
            expense: expenseReducer,
            filters: filterReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


// expense will be holding the latest expense state which is state.expense
// filters will be holding the latest filters state which is state.filters
// REASON being Reducers always return state to the createStore.
