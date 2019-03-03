
const request = require('request');



var geocodeAddress = (address, callback)=>{
	var uriAddress = encodeURIComponent(address);
	//console.log(uriAddress);
	request({
		url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+uriAddress+'&key=AIzaSyATsyM4tYmZO6tDSv1S1C6Qkjras1WZI7k',
		json: true
	},(error, response, body)=>{
		//console.log(JSON.stringify(body,undefined,4));
		if(error){
			callback("Unable to connect to Server","");
		}else if(body.status==='ZERO_RESULTS'){
			callback('Unable to find the given address',"");
		}else if(body.status==='OK'){
			var comp = {
				address: body.results[0].formatted_address,
				Lat: body.results[0].geometry.location.lat,
				Lng: body.results[0].geometry.location.lng
			}
			callback(null,comp);
			/*
			console.log("Address: "+body.results[0].formatted_address);
			console.log("Lat: "+body.results[0].geometry.location.lat);
			console.log("Lng: "+body.results[0].geometry.location.lng);
			*/
		}
		
	});

}

module.exports.geocodeAddress = geocodeAddress;