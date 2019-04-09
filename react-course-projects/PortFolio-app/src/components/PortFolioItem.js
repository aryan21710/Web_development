import React from 'react';
const PortFolioItem = (props) => {
    return (
        <div>
            <h1>A thing I've Done</h1>
            <p>Page:-{props.match.params.id}</p>
        </div>
    )
}


export default PortFolioItem;