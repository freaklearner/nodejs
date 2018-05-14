console.log('Starting notes.js');

module.exports.age = 25;
module.exports.addNotes = () =>{
  console.log("add notes");
  return 'Note added';
}
module.exports.add = function add(a,b){
  return a+b;
}
