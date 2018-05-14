console.log("Starting app.js");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filter = _.uniq(['Shub','shub','Shub',1,2,3,1,'shub']);
console.log(filter);



//console.log(_.isString(true));
//console.log(_.isString('Shubham'));



//var user = os.userInfo();
//var res = notes.add(9,-3);
//console.log("Result: "+res);
//console.log(user);
/*fs.appendFile('greeting.txt','\nHello ' + user.username+'!'+' You are '+notes.age+'.',function(err){
  if(err){
    console.log(err);
  }
});*/
