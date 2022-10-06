const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    foodType: String,
    foodName: String

});


const Food = mongoose.model('Food', schema, 'Foods')
module.exports = Food