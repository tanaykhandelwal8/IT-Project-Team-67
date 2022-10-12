const mongoose = require("mongoose");
<<<<<<< HEAD
=======
const bcrypt = require("bcryptjs");
>>>>>>> main

const residentSchema = new mongoose.Schema({
    residentId: mongoose.Schema.Types.ObjectId,
    notes: String //Can make a schema for this if we want to add date?
});

<<<<<<< HEAD
const schema = new mongoose.Schema({
=======
const clinicianSchema = new mongoose.Schema({
>>>>>>> main
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    residents: residentSchema
});

<<<<<<< HEAD
const Staff = mongoose.model('Staff', schema, 'Staffs')
=======
clinicianSchema.methods.verifyPassword = function(password, callback) {
    bcrypt.compare(password, this.password, (err, valid) => {
        callback(err, valid)
    })
}

const Staff = mongoose.model('Staff', clinicianSchema, 'Staffs')
>>>>>>> main
module.exports = Staff