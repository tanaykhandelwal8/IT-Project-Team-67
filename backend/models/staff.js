const mongoose = require("mongoose");

const residentSchema = new mongoose.Schema({
    residentId: mongoose.Schema.Types.ObjectId,
    notes: String //Can make a schema for this if we want to add date?
});

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    residents: residentSchema
});

const Staff = mongoose.model('Staff', schema, 'Staffs')
module.exports = Staff