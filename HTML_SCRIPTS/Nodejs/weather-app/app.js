
const yargs=require('yargs');
const geocode= require('./geocode/geocode_promises.js');  // your own module exported to this file.
const weather=require('./weather/weather_promises.js'); // YOU CAN OMIT .js AS NODE KNOWS ITS A JS FILE

const argv=yargs
.options({
	a : {
		describe : 'A valid Postal Address',
		demand : true,
		alias : 'addr',
		string : true,
	}
})
.help()
.argv;

// //1]
// // var callback=((err,result)=> {
// // 	console.log('IN CALLBACK FUNCTION ,PARAMETERS.err'+err + ',AND result '+ result);
// // 	if (err) {
// // 			console.log('ERROR OCCURED NOT ABLE TO REACH THE SERVER:-'+result);	
// // 	} else {
// // 		console.log(JSON.stringify(result,undefined,4));

// // 	}
// // });

// // geocode.geocodeAddr(argv, callback);
// //OR 

// 2] 

// geocode.geocodeAddr(argv, (err,result)=> {
// 	// console.log('IN CALLBACK FUNCTION ,PARAMETERS.err'+err);
// 	if (err) {
// 			console.log('ERROR OCCURED NOT ABLE TO REACH THE SERVER:-');	
// 	} else {
// 		console.log(JSON.stringify(result,undefined,4));
// 		var lat=result.latitude;
// 		var long=result.longitude;
// 		weather.weatherFunc(lat,long,(error,res)=>{
// 			if (error) {
// 				console.log(error);
// 			} else {
// 				console.log('----------------------------------------------------------');
// 				console.log(`CURRENT TEMPERATURE FOR:- "${result.address}" :- ${JSON.stringify(res,undefined,2)}`);
// 				console.log('----------------------------------------------------------');

// 			}
// 		});
// 	}
// });

geocode.geocodeAddr(argv).then((res)=> {
	console.log('CORDINATES DETAILS:-'+JSON.stringify(res,undefined,4));
	var lat=res.latitude;
	var long=res.longitude;
	console.log('----------------------------------------------------------');
	console.log(`CURRENT TEMPERATURE FOR:- "${res.address}"`);
	return weather.weatherFunc(lat,long);
}).then((weatherVal)=> {
		console.log(`:- ${JSON.stringify(weatherVal,undefined,2)}`);
		console.log('----------------------------------------------------------');
}).catch((error)=> {
	console.log('ERROR:-'+error);
})











