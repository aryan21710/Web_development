
import React from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'; 
import Header from '../../src/components/Header';
import Create from '../../src/components/Create';
import View from '../../src/components/View';
import PagenotFound from '../../src/components/PagenotFound';



export const Approutes=()=>{
    return (
        <BrowserRouter>
            <div>
            <Header/>
            <Switch>
                <Route path ='/' component={Create} exact={true}/>
                <Route path='/view' component={View}/>
                <Route component={PagenotFound}/>
            </Switch>
            </div>

        </BrowserRouter>
        
    )
}