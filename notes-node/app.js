console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
//const os = require('os');
const notes = require('./notes.js');


var command = process.argv[2];

console.log('Yargs',yargs.argv);

console.log('command',command);

if(command === 'add'){
  note = notes.addNotes(yargs.argv.title,yargs.argv.body);
  if(note){
    console.log()
    console.log('--');
    console.log('title: ',note.title);
    console.log('body: ',note.body);
  }
  else{
    console.log('Duplicate node already exist');
  }
}else if(command === 'list'){
  notes.getAll();
}else if(command === 'remove'){
   var res = notes.removeNote(yargs.argv.title);
   console.log(res);
}else{
  console.log('command not recognized');
}
//console.log(process.argv);





//var filter = _.uniq(['Shub','Abhi']);
//console.log(filter);



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
