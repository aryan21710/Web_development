
import React from 'react';
import {BrowserRouter, Route, link ,NavLink, Switch} from 'react-router-dom';
import Page404 from '../components/Page404';
import Home from '../components/Home';
import PortFolioItem from '../components/PortFolioItem';
import Contact from '../components/Contact';
import Header from '../components/Header';
import PortFolio from '../components/PortFolio';



const Approutes = ()=>{
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/portfolio" component={PortFolio} exact={true}/>
                    <Route path="/portfolio/:is" component={PortFolioItem}/>
                    <Route path="/contact" component={Contact}/>
                    <Route component={Page404}/>
                </Switch>
            </div>

        </BrowserRouter>
    )
    
}

export default Approutes;


