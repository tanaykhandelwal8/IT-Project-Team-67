const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const residentSchema = new mongoose.Schema({
    residentId: mongoose.Schema.Types.ObjectId,
    notes: String //Can make a schema for this if we want to add date?
});

const clinicianSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: String,
});

clinicianSchema.methods.verifyPassword = function(password, callback) {
    bcrypt.compare(password, this.password, (err, valid) => {
        callback(err, valid)
    })
}

const Staff = mongoose.model('Staff', clinicianSchema, 'Staffs')
module.exports = Staff