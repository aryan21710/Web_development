
const request=require('request');
const forecastKey='4160a0d5886299be50018da2e3ba0122';

var weatherFunc=(lat,long,callback)=> {
	console.log('IN WEATHER.JS FUNCTION NOW');
	// console.log('LAT AND LONG CORDINATES:-'+lat+':::'+long);
	const u=`https://api.darksky.net/forecast/${forecastKey}/${lat},${long}`;
	// console.log('URL :-'+u);
	request({
		url : u,
		json : true,
	},(error,response,body)=> {
		// console.log(JSON.stringify(body,undefined,2));
		if (error) {
			// callback('ERROR OCCURED');
			callback(`${error}, ERROR OCCURED`);			
		} else {
			if (body.code) {
				callback(`${body.code} ${body.error}, ERROR OCCURED`);
				// console.log(`${body.code} ${body.error}, ERROR OCCURED`);
			} else if (body.toString().search('Forbidden')!=-1){
				console.log('WRONG URL OR SECRET KEY');
			} else {	
				var d=new Date();
				callback(undefined, {
						currentTemperature : Math.round(Number((body.currently.temperature-32)*5/9)).toString()+String(' Celsius'),
						feelsLikeTemperature : Math.round(Number((body.currently.apparentTemperature-32)*5/9)).toString()+String(' Celsius'),
						timeOfTheDay : d.toTimeString(body.currently.time),
						
				});
			}
		}
		
	})
}

module.exports = {
	weatherFunc,
}