import React from 'react';
import {connect} from 'react-redux';
import StatusForm from './Statusform'
import {ViewRep} from '../action/ViewRep';

const Create=(props)=>{
    return (
        <div>
            <StatusForm onSubmit={(report)=>{
                props.dispatch(ViewRep(report))
            }}/>
        </div>
    )
}


export default connect()(Create)