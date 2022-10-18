const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    languageName: String,

});


const Language = mongoose.model('Language', schema, 'Languages')
module.exports = Language