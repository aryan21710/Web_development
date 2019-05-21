
import React from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'; 
import Header from '../../src/components/Header';
import Create from '../../src/components/Create';
import View from '../../src/components/View';
import PagenotFound from '../../src/components/PagenotFound';



export const Approutes=()=>{
    	var mainBg = require('./../../public/images/mainBg.jpg');
		var bannerStyle = {
			background: 'url(' + mainBg + ')',
			backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            margin: "0",
            padding: "0",
		};
    return (
		<BrowserRouter>
			<div style={bannerStyle}>
				<Header />
				<Switch>
					<Route path="/" component={Create} exact={true} />
					<Route path="/view" component={View} />
					<Route component={PagenotFound} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}