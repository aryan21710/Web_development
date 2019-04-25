
import React from 'react';
import {BrowserRouter, Route, link ,NavLink, Switch} from 'react-router-dom';
import Page404 from '../components/Page404';
import HelpPage from '../components/HelpPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';


const Approutes = ()=>{
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={ExpenseDashboardPage} exact={true} />
                    <Route path="/create" component={AddExpensePage} exact={true} />
                    <Route path="/edit" component={EditExpensePage} exact={true} />
                    <Route path="/help" component={HelpPage} exact={true} />
                    <Route component={Page404} />
                </Switch>
            </div>
        </BrowserRouter>
    )
    
}

export default Approutes;


