//Database Connection File

const mongoose = require('mongoose');
const env=require('./environment');

mongoose.connect(`mongodb+srv://chiragbansal123:mdJbvHm43dPOTjjY@cluster0.lne9m.mongodb.net/test?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB:"));
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;