
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./Weather/weather.js');

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


var callBack = (error,data)=>{
	if(error){
		console.log(error);
	}else{
		console.log("to-weather");
		// weather.getWeather(data.Lat,data.Lng,(error,temperature)=>{
		// 	if(error){
		// 		console.log(error);
		// 	}else{
		// 		console.log(data);
		// 		console.log(temperature);
		// 	}

		};
	}


geocode.geocodeAddress(argv.a,callBack);
console.log(argv);

//2002af53caf1b02338b70c445c88f311



