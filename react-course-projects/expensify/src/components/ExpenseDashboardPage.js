import React from 'react';
import ExpenseList from './ExpenseList';
import ConnectedExpenseListInputBox from './ExpenseListInputBox';


const ExpenseDashboardPage = () => {
    return (
        <div>
            <ConnectedExpenseListInputBox/>
            <ExpenseList/>
        </div>
    )
}


export default ExpenseDashboardPage;