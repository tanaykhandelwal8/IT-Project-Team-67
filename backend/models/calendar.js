const mongoose = require("mongoose");

const residentschema = new mongoose.Schema({
    residentId: mongoose.Schema.Types.ObjectId,
    notes: String //Can make a schema for this if we want to add date?
});

const schema = new mongoose.Schema({
    eventDateTime: Date,
    host: String,
    location: String,
    //image?
    description: String

});

const Calendar = mongoose.model('Calendar', schema, 'Calendars')
module.exports = Calendar