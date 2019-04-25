import React from 'react';
import ReactDOM from 'react-dom';

const ChildComp=(props)=>{
    return (
        <div>
            <p> INFO :- {props.info}</p>
        </div>
    )
}

const HigherOrderComp=(WrappedComponent)=>{
    return (props)=>{
        return (
             <div>
                 {props.isAuth ? 
                    <WrappedComponent {...props}/> :
                    <p> PLEASE LOGIN TO VIEW THE INFO</p>
                 }   
             </div>
        )
       
    }
}

const ParentComp = HigherOrderComp(ChildComp);

ReactDOM.render( <ParentComp isAuth={false} info = "HEY AUTHENTICATED USER, WELCOME TO MY PAGE" / > , document.getElementById('app'));
