import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>{
    return (
        <div>
            <h1>USER AUTHENTICATED :-</h1>
            <p> THE PRIVATE INFO IS {props.info} </p>
        </div>
    )
}

const wrapperFunc=(WrappedComponent)=>{
    return (props)=>{
        return (
            <div>
            {props.isAuth ? <WrappedComponent info={props.name}/> : <p>AUTHENTICATION FAILED</p>}
        </div>
        )    
    }
}
// #KEYWORDS:- [AuthInfo is HOC here.]
const AuthInfo=wrapperFunc(Info);

ReactDOM.render(<AuthInfo isAuth={false} 
name="Aryan Sharma"/>, 
    document.getElementById('app'));