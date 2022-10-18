const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: String,
    genre: String,
    artist: String

});


const Music = mongoose.model('Music', schema, 'Musics')
module.exports = Music