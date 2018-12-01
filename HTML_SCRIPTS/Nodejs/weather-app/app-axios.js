
const axios=require('axios');
const geoKey='14IVr5AIZlbKTr2C9Ax5GWiFgGZ6srus';
const yargs=require('yargs');
const util=require('util');
const weatherKey='4160a0d5886299be50018da2e3ba0122';

const argv=yargs.options({ 
	address : {
		alias: 'addr',
		demand : true,
		describe : 'A Valid postal address',
		string : true,
	}
})
.help()
.argv;

const address=encodeURIComponent(argv.address);
// console.log('argv:-'+JSON.stringify(address,undefined,4));

const geoCodeUrl=`http://www.mapquestapi.com/geocoding/v1/address?key=${geoKey}&location=${address}`;



axios.get(geoCodeUrl).then((response)=>{
	var add=response.data.results[0].providedLocation.location;
	var lat=response.data.results[0].locations[0].latLng.lat;
	var lng=response.data.results[0].locations[0].latLng.lng;
	const weatherUrl=`https://api.darksky.net/forecast/${weatherKey}/${lat},${lng}`;
	console.log('------------------------------------------------------------');
	console.log(`${add} has ${lat} LATITUDE and ${lng} LONGITUDE`);
	return axios.get(weatherUrl);
}).then((resp)=>{
	// console.log(util.inspect(resp,undefined,4));
	var d=new Date();
	// var currTemp=resp.data.currently;
	// console.log('prop:-'+Object.keys(currTemp));
	for (let i in currTemp) {
		console.log(`${i} :- ${currTemp[i]}`);
	}
	var temp=resp.data.currently.temperature;
	var appTemp=resp.data.currently.apparentTemperature;
	var time=d.toTimeString(resp.data.currently.time);
	console.log(`Its Tempearture is ${temp} although it feels like ${appTemp} @ ${time}`);
	console.log('------------------------------------------------------------');
}).catch((error)=> {
	console.log('ERROR:-'+error);
})

