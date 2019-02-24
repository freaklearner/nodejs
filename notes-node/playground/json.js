
const fs = require('fs');

var obj = {
  title : 'naruto',
  body : 'some body'
}

var str = JSON.stringify(obj);
//fs.writeFileSync('notes.json',str);
//console.log('file written');

str = fs.readFileSync('notes.json');
obj = JSON.parse(str);
console.log(obj.title);


/*var obj = {
  name : "Shubham",
  age : 24
}

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

var jObj = JSON.parse(stringObj);
console.log(typeof jObj);
console.log(jObj);
*/
