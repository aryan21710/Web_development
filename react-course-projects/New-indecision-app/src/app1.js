// import {isAdult, canDrink}  from'./delLater.js'
// console.log('APP1.JS IS RUNNING');
// console.log(isAdult(19));
// console.log(canDrink(20));

//#KEYWORDS:- [React using webpack; Different components lies in Difft files];

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import '../styles/style.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));