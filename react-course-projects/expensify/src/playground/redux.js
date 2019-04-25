import {createStore} from 'redux';

// createStore is an object which accepts a callback function as argument called reducer. the arguments passed to the
// callback function/reducer are state variable object and action object.

// the function passed to createStore is called REDUX-REDUCER. It always returns something and that something
// is the NEW STATE.
// ACTION DEFINES THAT SOMETHING HAS HAPPENED, BUT DONT SPECIFY HOW THE APPLICATION STATE HAS CHANGED,
// THIS IS THE ROLE/JOB OF REDUCER TO INITIMATE THE APP STATE CHANGE.
const store=createStore((state={cnt:0},action)=>{
    switch(action.type) {
        case 'INCREMENT' :
        console.log('DATA IS INCREMENTED');
            // const incr = typeof (action.incrementBy) === 'number' ? action.incrementBy : 1;
            return {
                cnt: state.cnt + action.incrementBy
            }
        case 'DECREMENT' :
            // const decr = typeof (action.decrementBy) === 'number' ? action.decrementBy : 1;
            console.log('DATA IS DECREMENTED');

            return {
                cnt: state.cnt - action.decrementBy
            }

        case 'RESET' :
            console.log('DATA IS RESET');

            return {
                cnt: 0
            }

        case 'SET' :
            console.log('DATA IS SET');
            return {
                cnt: action.count
            }

        default :
            return state;
    }
})

// Action generator

// it will check whether defObj.incrementBy exists and a value which is type number is passed, otherwise
// it will put default value of 1 in action generator.
// const incr = ((defObj={}) => {
//     console.log('INCR IS CALLED');
//     return {
//         type: 'INCREMENT',
//         incrementBy: typeof (defObj.incrementBy) === 'number' ? defObj.incrementBy : 1,
//     }
// })

// OR

// #KEYWORDS:- [SIMPLIFIED CODE USING OBJ DESTRUCT AND PASSING DEFAULT WHEN OBJ IS PASSED AS AN ARG TO A FUNC]

const incr = (({incrementBy=1}={}) => {
    console.log('INCR IS CALLED');
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy,
    }
})

const decr=({decrementBy=1}={})=>{
    return {
        type: 'DECREMENT',
        decrementBy
    }
}

const reset=()=>{
    return {
        type: 'RESET',
    }
}

const set=(defObj={})=>{
    return {
        type: 'SET',
        count : typeof(defObj.count)==='number' ? defObj.count : 1
    }
}

console.log(`INITIAL COUNT VALUE ${store.getState().cnt}`);

// #KEYWORDS:- [store.subscribe will print or execute the code passed inside the callback function whenever
// there is change in the state variable value. once you call store.unsubscribe the callback function passed
// to store.subscibe will stop executing.]
store.subscribe(()=>{
    console.log(`CHANGED COUNT VALUE ${store.getState().cnt}`);

})

// #KEYWORDS:- inside dispatch we have action object which have default presets like Increment, decrement
// reset which will let us play with the state. the type is mandatory argument passed to action object.
store.dispatch(incr({incrementBy: 5}))

store.dispatch(incr());

store.dispatch(decr({decrementBy: 3}))

store.dispatch(decr());

store.dispatch(reset());

store.dispatch(set({count: 100}))



