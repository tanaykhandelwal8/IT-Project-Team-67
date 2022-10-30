const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    hobbyName: String

});


const Hobby = mongoose.model('Hobby', schema, 'Hobbies')
module.exports = Hobby