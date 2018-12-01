
//#KEYWORD [callback to a class method, callback-to-callback, implementation using class and not functions, promises chaining]
const geocode=require('./geocode_promises.js');
OR 
// const geocode=require('./geocode.js');

// const weather=require('./weather.js');
const yargs=require('yargs');

const argv=yargs
	.option('address',{
				alias : 'addr',
				description : 'Valid Postal address'	
	}).demandOption(['address'], 'Provide Valid Postal address')
	.help()
	.alias('help','h')
	.argv;


const obj=new geocode.geocodeCl(argv);
const obj1=new geocode.weatherCl(argv);

// geocodefunc has 3 arguments (including a callback function).
// HERE err,body{} function is a callback function which will be called only when geocodefunc
// finishes execution. since you are defining one more function in geocodefunc call here, 
// you need to pass the function when defining or declaring the code of geocodefunc.
// you can call that function anything lets say callback. when geocodefunc passes and 
// returns a postive or desired value it will not return that instead it will call 
// callback function which will transfer the code execution to this (err,body)=>{} code
// here. callback(undefined,xyz) will make err as undefined so the code will be passed
// to else block where body=xyz. When geocodefunc is failing, it wont return anything
// it will instead do a callback (callback(e)). only argument here means err=e and 
// body={} so if err code will be called here.

// obj.geocodefunc((err,body)=>{
// 	if (err) {
// 		console.log(JSON.stringify(err,null,4))
// 	} else {
// 		console.log('-----------------------------------');
// 		console.log('COORDINATES DETAILS:-'+JSON.stringify(body,null,4))
	
	// callback to callback. Here once geocodefunc returns a value that value is passed
	// to callback function. once first callback function finishes execution (err,body)
	// next callback function weatherfunc is called.

	// only inside this geocode func we have access to variable body through which
	// we have access to latitude and longitude. Thats why its imperative to call another
	// callback function weatherfunc here and not outside this scope, since weatherfunc
	// should have access to latitide and longitude to print the weather of that place.

// 	obj1.weatherfunc(body,(err1,body1)=>{
// 		if (err1) {
// 			console.log(err1);
// 		} else {
// 			console.log('TEMPERATURE DETAILS:-'+JSON.stringify(body1,null,4));
// 		}
// 	})
// 	}
// })


//OR 

obj.geocodefunc().then((res)=>{
		console.log('-----------------------------------');
		console.log('COORDINATES DETAILS:-'+JSON.stringify(res,null,4))
		return obj1.weatherfunc(res);
}).then((body)=> {
	console.log('TEMPERATURE DETAILS:-'+JSON.stringify(body,null,4));
}).catch((err)=> {
	console.log('ERROR OCCURED ..:-'+err);
})

