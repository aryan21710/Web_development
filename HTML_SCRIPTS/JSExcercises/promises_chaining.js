//#KEYWORDS:- [Promise explanation, promises chaining, reduce, resolve, reject, catch, promises-->promises-->promises ]

// avg=(...num)=> {
// 		let addition=num.reduce((sum,v)=>sum+v)
// 		return parseInt(addition/num.length);
	
// }
// console.log(avg(10,10,10));



// sum(a,b) is a function which returns a promoise. Promise has 2 arguments resolve,reject. Resolve is 
// executed when you want to return a pass condtion for your function  and reject is when you want 
// to return a fail condtion. You cant have both the conditions in your code unless and until you havr
// a if/else condition one for resolve and one for reject.


sum=((a,b)=> {
	return new Promise((resolve,reject)=> {
		if (typeof(a) == 'number' && typeof(b)== 'number') {
			resolve(a+b);
		} else {
			reject ('ERROR ADDING THE NUMBERS')
		}
	})
})

avg=((...num)=> {
	return new Promise((resolve,reject)=>{
		if (num.length > 0) {
			let addition=num.reduce((total,sum)=>total+sum)
			resolve(parseInt(addition)/num.length);
		} else {
			reject('NUMBER OF ELEMENTS PASSED TO AVG FUNCTION IS 0 ')
		}
	})
})

printMe=((msg)=>{
	return new Promise((resolve,reject)=>{
		resolve(msg);
		// reject(msg);
	})
})


// Here you call the promise function. .then is called for the pass condtion which corresponds to
// resolve statement and .catch stands for reject or failed condition. The argument inside the then
// statement is nothing but the return resolve statement value/variable. Similarly is the case with
// catch parameter.
sum(5,5).then((pass)=>{
	console.log(`addition func returns ${pass}`);
	// This is the next promise statment which gets executed after 1st promise statement returns
	// resolves. The pass variable will be available in this then scope which is applicable for
	// avg function since its enclosed within then callback/promise.
	return avg(pass,5,5);
	// if avg promise gets resolves the execution will be moved to the following then statement
}).then((average)=>{
	console.log(`AVG IS :-${average}`);
	return printMe('I AM PRINTED');
}).then((msg)=>{
	console.log(msg);
}).catch((fail)=>{
	console.log(fail);
})

