// #KEYWORDS:- [super, yargs.option, encodeURI, demandOption, request module, module.exports, class, static function, ternery operator, ?:, try/catch]
const request=require('request');
const fs=require('fs');

class geocodeCl {
	constructor(argv) {
		this.argv=argv;
		this.coordinates={};
		this.addr=encodeURI(this.argv.addr);
		if (isNaN(Number(this.addr))) {
			this.myurl=`http://www.mapquestapi.com/geocoding/v1/address?key=14IVr5AIZlbKTr2C9Ax5GWiFgGZ6srus&location=${this.addr}`;
		} else {
			this.myurl=`http://www.mapquestapi.com/geocoding/v1/address?key=14IVr5AIZlbKTr2C9Ax5GWiFgGZ6srus&postalCode=${this.addr}`;
		}
	}

	static processbody(body1) {
			const location=(body1.results[0].providedLocation.location!=undefined) ? body1.results[0].providedLocation.location : 
			`${body1.results[0].locations[0].adminArea5} ${body1.results[0].locations[0].adminArea3} ${body1.results[0].locations[0].adminArea1} `
			return {
				location : `${location}`,
				latitude : `${body1.results[0].locations[0].latLng.lat}`,
				longitude : `${body1.results[0].locations[0].latLng.lng}`
			};
	}

	
	// JSON:true will return the body/err/response in JSON format. You can then use chrome extension
	// JSON-view to fetch the desired property out of body/err/response objects. THIS WILL SET THE
	// accept header to application/json inside request header (sent by client to the server.)

	// body is part of the both request and response object returned by the server. You can access the body
	// object via response  or request object.

	// statuscode is very important and sent in response header. Only if its 200 which stands for ok
	// then you should go ahead and code rest of the api call.

	// TO SIMULATE ERROR SO THAT YOU CAN SEE THE CONTENTS OF THE ERROR OBJECT. JUST PROVIDE WRONG-URL
	// OR DISCONNECT THE NET CONNECTIVITY AND PRINT THE OUTPUT OF ERROR "err1" OBJECT. 
	geocodefunc(callback) {
		request({url:this.myurl,json:true},(err1,resp1,body1)=>{

			// IF RESPONSE IS BACK WHICH MEANS NO ERROR THEN PRINT THE CONTENTS OF RESPONSE HEADER
			// TO A FILE USING WRITEFILE. IF NO ERROR IN WRITING TO THE FILE, THEN THE CONTENTS OF
			// THE FILE WILL BE STORED IN BODY OBJECT.
			if (resp1) {
				fs.writeFile('./request_to_google.txt',`${JSON.stringify(resp1,null,4)}`,(err,body)=>{
					if (err) {
						console.log('NOT ABLE TO WRITE TO THE FILE');
					} else {
						try {				
							const output=(body1.info.statuscode===0) ? body1 : body1.info.messages;
							this.coordinates= (output.toString().match(/Illegal/g))  ? output : geocodeCl.processbody(body1);
							callback(undefined,this.coordinates);
						} catch(e) {
							console.log('WRONG ADDRESS PASSED:-'+e);
							callback(e);
						}
					}
				})
			} else {
				console.log('NO NET CONNECTIVITY:-'+err1);
				callback(err1);
			}
		})
	}
}

class weatherCl extends geocodeCl {
	constructor(argv) {
		super (argv)
		this.forecastKey='4160a0d5886299be50018da2e3ba0122';
	}

	weatherfunc(body,callback) {
		let lat=`${body.latitude}`
		let long=`${body.longitude}`
		this.forecastUrl=`https://api.darksky.net/forecast/${this.forecastKey}/${lat},${long}`
		request({url:this.forecastUrl, json:true},(err1,resp1,body1)=>{
			if (resp1) {
				if (body1.code!=400) {
					if (body1.toString()!='Forbidden\n') {
						let d=new Date();
						let obj = {
							time : d.toTimeString(body1.currently.time),
							apparentTemp: `${body1.currently.apparentTemperature} Fahrenheit`,
							humidity : body1.currently.humidity,
							temperature: `${body1.currently.temperature} Fahrenheit`
						}
						callback(undefined,obj);
					} else {
						callback('INVALID SECRET KEY');
					}
				} else {
					callback ('WRONG LATITUDE AND LONGITUDE PROVIDED. FAILING THE WEATHER TEST');
				}
			} else {
				callback('ERROR OCCURED');
			}
		})
	}
}

module.exports = {
	geocodeCl,
	weatherCl
}