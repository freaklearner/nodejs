
const request = require('request');

var getWeather = (lat,lng,callback)=>{
	var data = lat+','+lng;

	request({
		url: 'https://api.darksky.net/forecast/2002af53caf1b02338b70c445c88f311/'+data,
		json:true
	},(error,response,body)=>{
		if(error){
			callback('Unable to connect to server');
		}
		else if(response.statusCode === 404){
			callback('unable to fetch weather');
		}
		else if(response.statusCode===200){
			console.log('200');
			callback(undefined,{'temperature':body.currently.temperature});
		}
	});
}

module.exports.getWeather = getWeather;