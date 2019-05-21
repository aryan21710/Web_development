import React from "react";
import ReactDOM from "react-dom";
import { Approutes } from "../src/routers/Approutes";
import "../styles/_style.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";

const report = {
  createdAt: "",
  category: {},
  categoryCnt: 0,
	categoryObj: {},
	category: 'Miscellaneous',
	text: '',
		data: [{
			date: '',
			category: '',
			status: '',
		}],
};
const reducer = (state = [report ], action) => {
  switch (action.type) {
    case "VIEW_REP":
      console.log("INSIDE VIEW_REP SWITCH STATEMENT");
      console.log("REPORT:-" + JSON.stringify(action.report));
      return Object.assign({}, action.report);
    // return [...state, action.report]
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log("latest state change:-" + JSON.stringify(store.getState()));
});

const jsx = (
  <Provider store={store}>
    <Approutes />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

// ***********************************************



    

  //   if (this.props.report.data) {
	// 	if (localStorage.getItem('data')) {
	// 		console.log('LOCALSTORAGE AND PROPS.DATA');

	// 		displayData = this.props.report.data.map(v => {
	// 			console.log('v:-' + JSON.stringify(v));
	// 			console.log(JSON.parse(localStorage.getItem('data')));
	// 			return displayData.concat(JSON.parse(localStorage.getItem('data'), v));
	// 		});
	// 	} else {
	// 		console.log('NO LOCALSTORAGE BUT PROPS.DATA');
	// 		displayData = this.props.report.data;
	// 	}

	// 	console.log('displayData:-' + displayData);

	// 	localStorage.setItem('data', JSON.stringify(this.props.report.data));
	// } else if (localStorage.getItem('data')) {
	// 	if (this.props.report.data) {
	// 		console.log('LOCALSTORAGE AND PROPS.DATA');

	// 		displayData = this.props.report.data.map(v => {
	// 			return displayData.concat(JSON.parse(localStorage.getItem('data')), v);
	// 		});
	// 	} else {
	// 		console.log('ONLY LOCALSTORAGE');
	// 		displayData = displayData.concat(JSON.parse(localStorage.getItem('data')));
	// 	}

	// 	console.log('displayData:-' + JSON.stringify(displayData));

	// 	localStorage.setItem('data', JSON.stringify(displayData));
	// }
