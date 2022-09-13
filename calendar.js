const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    datetime: date,
    name: String,
    location: String,
    description: String,
    //image,
    host: String

})

const schema = new mongoose.Schema({
    date: date,
    event: eventSchema
});
const Calendar = mongoose.model('Calendar', schema, 'Calendars')
module.exports = Calendar
