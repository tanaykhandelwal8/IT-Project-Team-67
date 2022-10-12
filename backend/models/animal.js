const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    animalName: String

});


const Animal = mongoose.model('Animal', schema, 'Animals')
module.exports = Animal