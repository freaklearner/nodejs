console.log("Starting app.js");

const fs = require('fs');
const os = require('os');

const notes = require('./notes.js');
var user = os.userInfo();
var res = notes.add(9,-3);
console.log("Result: "+res);
//console.log(user);
/*fs.appendFile('greeting.txt','\nHello ' + user.username+'!'+' You are '+notes.age+'.',function(err){
  if(err){
    console.log(err);
  }
});*/
