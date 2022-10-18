const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    interestName: String

});


const Interest = mongoose.model('Interest', schema, 'Interests')
module.exports = Interest