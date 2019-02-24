const request = require('request');



request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?address=sant%20nagar%20burari%20delhi%20india&key=AIzaSyATsyM4tYmZO6tDSv1S1C6Qkjras1WZI7k',
	json: true
},(error, response, body)=>{
	//console.log(JSON.stringify(body,undefined,4));
	console.log("Address: "+body.results[0].formatted_address);
	console.log("Lat: "+body.results[0].geometry.location.lat);
	console.log("Lng: "+body.results[0].geometry.location.lng);
});
