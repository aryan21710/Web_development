

console.log('STARTING UP');

setTimeout(()=> {
	console.log('SETTIMEOUT 2000 IS CALLED');
},2000);

setTimeout(()=> {
	console.log('SETTIMEOUT 0 IS CALLED');
},0);

console.log('FINISHING UP');