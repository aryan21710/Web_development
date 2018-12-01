
const request=require('request');
const forecastKey='4160a0d5886299be50018da2e3ba0122';

//WEATHER FUNC IS A FUNCTION THAT TAKES 2 ARGUMENTS LAT AND LONG AND
// RETURNS A PROMISE. NOW A PROMISE WILL EITHER RETURN RESOLVE OR REJECT
// DEPENDING ON WHETHER THE CODE INSIDE THE PROMISE RETURNS REQUEST.BODY (RESOLVE)
// OR RETURNS REQUEST.ERROR( REJECT) MESSAGE.

var weatherFunc=((lat,long)=> {
	return new Promise ((resolve,reject)=>{
		console.log('IN WEATHER PROMISES.JS FUNCTION NOW');
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
				reject(`${error}, ERROR OCCURED`);			
			} else {
				if (body.code) {
					reject(`${body.code} ${body.error}, ERROR OCCURED`);
					// console.log(`${body.code} ${body.error}, ERROR OCCURED`);
				} else if (body.toString().search('Forbidden')!=-1){
					reject('WRONG URL OR SECRET KEY');
				} else {	
					var d=new Date();
					resolve({
							currentTemperature : Math.round(Number((body.currently.temperature-32)*5/9)).toString()+String(' Celsius'),
							feelsLikeTemperature : Math.round(Number((body.currently.apparentTemperature-32)*5/9)).toString()+String(' Celsius'),
							timeOfTheDay : d.toTimeString(body.currently.time),
							
					});
				}
			}
		
	})	
	})
	
})

module.exports = {
	weatherFunc,
}