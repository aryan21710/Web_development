import React from 'react';
import ReactDOM from 'react-dom';
const Template=(props)=>{
    return (
        <div>
            <p>{props.title}</p>
        </div>
    )
}
ReactDOM.render(<Template title='MY REDUX BASIC APP'/>,document.getElementById('app'));
