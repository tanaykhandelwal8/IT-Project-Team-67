const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    genre: String,
    artist: String,
    title: String
});


const Music = mongoose.model('Music', schema, 'Musics')
module.exports = Music