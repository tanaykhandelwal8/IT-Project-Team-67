const mongoose = require("mongoose");

const residentschema = new mongoose.Schema({
    residentId: mongoose.Schema.Types.ObjectId,
    notes: String //Can make a schema for this if we want to add date?
});

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    residents: residentSchema
});

const Staff = mongoose.model('Staff', schema, 'Staffs')
module.exports = Staff