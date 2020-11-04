const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});



const Doc = mongoose.model('Doc', new mongoose.Schema({
  pantry: String,
  user_id: String,
 }));



 Doc.find(function (err, results) {
  if (err) {return console.error(err)}
  else{
  console.log(results,"results from restart");
 }
})

module.exports = {
  db,
  Doc,
};
