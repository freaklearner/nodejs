console.log("Starting app.js");

const fs = require("fs");
const os = require("os");

const notes = require("./notes.js");

var user = os.userInfo();
console.log(user);

console.log(notes.age);

console.log("Sum: "+notes.sum(45,10));
/*fs.appendFile('greetings.txt','Hello ${user.username}!',(err)=>{
    if(err){
        console.log("error occured");
    }
    */
    
//});