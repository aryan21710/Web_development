import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../action/expenses';
import {Link} from 'react-router-dom';



const ExpenseInp= ({dispatch,description,amount,createdAt,id})=>{
    return (
        <div>
            <Link to={`/edit/${id}`}>
                          <p>DESCRIPTION LIST:-{description}</p>
            </Link>
              <p>AMOUNT :-{amount}</p>
              <p>CREATEDAT TIME:-{createdAt}</p>
        </div>
    )
}



export default connect()(ExpenseInp);