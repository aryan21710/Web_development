import React from 'react';
import ReactDOM from 'react-dom';
import {Approutes }from '../src/routers/Approutes';
import '../styles/_style.scss';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const report={text: '', category: '', date: ''}
const reducer=(state={report},action)=>{
    switch (action.type) {
        case 'VIEW_REP':
        console.log('INSIDE VIEW_REP SWITCH STATEMENT');
        console.log('REPORT:-'+JSON.stringify(action.report));
        // return Object.assign({},state.report,action.report)
            return [...state.report, action.report]
        default:
            return state
    }
}

const store=createStore(reducer);

store.subscribe(()=>{
    console.log('latest state change:-'+JSON.stringify(store.getState()));
})


const jsx=(
    <Provider store={store}>
        <Approutes/>
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));
