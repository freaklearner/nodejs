
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');

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
		console.log(data);
	}
}



geocode.geocodeAddress(argv.a,callBack);
console.log(argv);


