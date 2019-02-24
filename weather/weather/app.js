const request = require('request');
const yargs = require('yargs');


var argv = yargs.
	options({
		a:{
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias("help","h")
	.argv;

console.log(argv);

var uriAddress = encodeURIComponent(argv.a);
console.log(uriAddress);
request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+uriAddress+'&key=AIzaSyATsyM4tYmZO6tDSv1S1C6Qkjras1WZI7k',
	json: true
},(error, response, body)=>{
	//console.log(JSON.stringify(body,undefined,4));
	console.log("Address: "+body.results[0].formatted_address);
	console.log("Lat: "+body.results[0].geometry.location.lat);
	console.log("Lng: "+body.results[0].geometry.location.lng);
});
