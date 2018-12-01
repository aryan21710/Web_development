const request=require('request');
const fs=require('fs');
const util=require('util');
const k='14IVr5AIZlbKTr2C9Ax5GWiFgGZ6srus';


var geocodeAddr= (argv, callback)=> {
	// var address=argv.addr.toString().split(' ').join('%20');
	// OR
	var address=encodeURIComponent(argv.addr.toString());

	if (isNaN(Number(address))) {
		var u=`http://mapquestapi.com/geocoding/v1/address?key=${k}&location=${address}`;
	} else {
		var u=`http://mapquestapi.com/geocoding/v1/address?key=${k}&postalCode=${address}`;
	}
	// console.log('url:-'+u);
	console.log('CALLING THE GEOCODE ADDRESS FUNCTION NOW:-');
	request({
		url: u,
		json: true,
	},(error,response,body)=>{
		fs.writeFileSync('weather_app_data.txt',util.inspect(body,null,4));
		if (error) {
			callback('ERROR OCCURED NOT ABLE TO REACH THE SERVER:-');
		} else if (body.info.messages.length > 0) {
			if (body.info.messages[0].toString().search('Illegal') != -1) {
				callback('PLEASE ENTER A VALID ADDRESS AND TRY AGAIN');
			}
		} else {

			// var output=(body.results[0].providedLocation.location) ? body.results[0].providedLocation.location: body.results[0].providedLocation.postalCode; 
			// console.log('address extension:-'+output);
			if (body.results[0].providedLocation.location==undefined) {
				output=(`${body.results[0].locations[0].adminArea5} ${body.results[0].locations[0].adminArea3} ${body.results[0].locations[0].adminArea1}`);
			} else {
				output=decodeURIComponent(address);
			}
			// console.log('address extension:-'+output);

			var res= {
				address : output.toUpperCase(),
				latitude : (`${body.results[0].locations[0].latLng.lat}`),
				longitude : (`${body['results'][0]['locations'][0]['latLng']['lng']}`),
			}
			callback(undefined, res);
		}
	})
}

module.exports = {
	geocodeAddr,
}