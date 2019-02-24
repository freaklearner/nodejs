const request = require('request');



request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?address=sant%20nagar%20burari%20delhi%20india&key=AIzaSyATsyM4tYmZO6tDSv1S1C6Qkjras1WZI7k',
	json: true
},(error, response, body)=>{
	console.log(body);
});