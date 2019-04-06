import React from 'react';
import Modal from 'react-modal';

const DisplayUsingModal=(props)=>{
    return (
        <Modal          
            isOpen={!!props.showOption}
            onRequestClose={props.delShowOption}
            contentLabel="Displayed using Modal"
            closeTimeoutMS={200}
            className="modal"
        >
                <h3> Selected Option </h3> <br></br>
                   <h4> {props.showOption &&
                        props.options[Math.floor(Math.random() * (props.options.length - 0) + 0)]
                    }</h4>
                <button onClick={props.delShowOption}>Okay</button>
 
        </Modal>  
    )
}


export default DisplayUsingModal;


