console.log('Starting notes.js');

var addNotes = (title,body) => {
  console.log('Adding Notes',title,body);
}

var getAll = () =>{
  console.log('Getting all notes');
}

module.exports = {
  addNotes,
  getAll
}
