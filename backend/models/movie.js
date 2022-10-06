const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: String,
    genre: String

});


const Movie = mongoose.model('Movie', schema, 'Movies')
module.exports = Movie