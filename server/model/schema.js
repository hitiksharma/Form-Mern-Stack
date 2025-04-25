// create instance for moongose

const mongoose = require('mongoose') 

// create the schema 

const inputSchema= new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

// creating module to save, find delete and update

module.exports = mongoose.model('Input',inputSchema);

