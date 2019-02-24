console.log('Starting notes.js');
const fs = require('fs');

var fetchNotes = () =>{
  try{
    var data = fs.readFileSync('notes-data');
    notes = JSON.parse(data);
    return notes;
  }catch (e){
    return [];
  }
}


var storeNotes = (notes) =>{
  fs.writeFileSync('notes-data',JSON.stringify(notes))

}


var addNotes = (title,body) => {
  var notes = [];
  notes = fetchNotes();
  var duplicatesnodes = notes.filter((note) => note.title === title);
  if(duplicatesnodes.length ===0){
    var obj = {
      title,
      body
    }
    notes.push(obj);
    storeNotes(notes);
    return obj;
  }
}


var getAll = () =>{
  notes = fetchNotes();
  console.log(notes);
}


var removeNote = (title) =>{
  var notes = fetchNotes();
  var note = notes.filter((note) => note.title!=title);
  storeNotes(note);
  if(note.length!=notes.length){
    return 'note removed';
  }else{
    return 'note does not exist';
  }
}


module.exports = {
  addNotes,
  getAll,
  removeNote
}
