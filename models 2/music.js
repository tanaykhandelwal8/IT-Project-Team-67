const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    genre: String,
    artist: String,
    label: String,
    value: String

});


const Music = mongoose.model('Music', schema, 'Musics')
module.exports = Music