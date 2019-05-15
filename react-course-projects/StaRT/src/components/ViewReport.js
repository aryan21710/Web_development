import React from 'react';

export default class ViewReport extends React.Component {
    render() {
        return (
           <div className="main">
                <div className="create">
                <div className="myform">
                      <input type="text" placeholder='SEARCH REPORT' value=''></input>
                <select className='options'>
                    <option value='sort_date'>SORT_BY_DATE</option>
                    <option value='sort_category'>SORT_BY_CATEGORY</option>
                </select>
                <textArea className='textArea'>
                </textArea>
                </div>
          
            </div>
            </div>
            
        )
    }
}