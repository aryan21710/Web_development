
import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const dummyState={
    expenses:[{
        id: 'ndsfksnfmdfmsd',
        amount: 20500,
        description:'RENT FOR APRIL',
        note: 'PAID ADVANCE FULL RENT TO LANDLORD',
        dateCreated: '',
    }],
    filters: {
        text: 'RENT',
        sortBy: '',
        startDate:'',
        endDate: ''
    }
}

// ACTION GENERATORS:-
// ADD EXPENSE, REMOVE EXPENSE, EDIT EXPENSE, SET_TEXT_FILTER, SORT_BY_DATE,SORT_BY_AMOUNT
// SET_STARTDATE, SET_ENDDATE. 

const addExpense=({
    amount=100,
    description='',
    note='',
    dateCreated='26/04/2019',
}={})=>({
   
        type: 'ADD_EXPENSE',
        expenses: {
            id: uuid(),
            amount,
            description,
            note,
            dateCreated
        }
    
})

const expenseDefStateValues=[]
const expenseReducer=(state=expenseDefStateValues,action)=>{
    switch (action.type) {
        case 'ADD_EXPENSE':
            return  [...state, action.expenses]

        default:
            return {
                state
            }
    }
}

const filterDefaultStateValues={text:'RENT',sortBy:'date',startDate:'1/04/2019', endDate:'30/04/2019'};
const filterReducer=(state=filterDefaultStateValues,action)=>{
    switch (action.type) {
        
        default:
        return {
            state
        }
    }
}

// #KEYWORDS:- [combineReducers is a function which takes multiple reducers (those reducer handles applicaion state)
// passed as a value to the key of an object. THIS WAY WE CAN handle multiple differnt states mounted to different
//reducer to make code simple and not complex]
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
)

// subscribe should be always before the dispatch item.
store.subscribe(() => {
    console.log(store.getState());

})


store.dispatch(addExpense({amount: 700, description: 'movie', note:'AVENGERS ENDGAME'}))
store.dispatch(addExpense({
    amount: 20500,
    description: 'RENT',
    note: 'APRIL RENT'
}))


