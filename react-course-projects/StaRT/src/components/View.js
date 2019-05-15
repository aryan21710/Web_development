import React from 'react';
import ViewReport from './ViewReport';
import {connect} from 'react-redux';


const View= (props)=>{
    return (
        <div>
            <ViewReport report={props.report}/>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        report: state.report
    }
}

export default connect(mapStateToProps)(View);