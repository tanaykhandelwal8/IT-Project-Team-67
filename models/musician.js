const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    musicianName: String,
    genre: String

});


const Musician = mongoose.model('Musician', schema, 'Musicians')
module.exports = Musician