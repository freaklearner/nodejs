console.log('Starting notes.js');

const fs = require('fs');

var addNotes = (title,body) => {
  //console.log('Adding Notes',title,body);
  var notes = [];
  try{
    var data = fs.readFileSync('notes-data');
    notes = JSON.parse(data);
  }catch (e){
  }
  var duplicatesnodes = notes.filter((note) => note.title === title);

  console.log('duplicates',duplicatesnodes);
  if(duplicatesnodes.length ===0){
    var obj = {
      title,
      body
    }
    notes.push(obj);
    fs.writeFileSync('notes-data',JSON.stringify(notes))
  }

}

var getAll = () =>{
  console.log('Getting all notes');
}

module.exports = {
  addNotes,
  getAll
}
