const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const SALT_FACTOR = 10

const imageSchema = require('./image')

const animalSchema= new mongoose.Schema({
    animalId: mongoose.Schema.Types.ObjectId
    //image
});

const musicSchema= new mongoose.Schema({
    musicId: mongoose.Schema.Types.ObjectId
});

const foodSchema= new mongoose.Schema({
    foodId: mongoose.Schema.Types.ObjectId
});

const movieSchema= new mongoose.Schema({
    movieId: mongoose.Schema.Types.ObjectId
});

const hobbySchema= new mongoose.Schema({
    hobbyId: mongoose.Schema.Types.ObjectId
});

const interestSchema= new mongoose.Schema({
    interestId: mongoose.Schema.Types.ObjectId
});

const musicianSchema= new mongoose.Schema({
    musicianId: mongoose.Schema.Types.ObjectId
});

const languageSchema= new mongoose.Schema({
    languageId: mongoose.Schema.Types.ObjectId
});

const residentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    location: String,
    dateOfBirth: Date,
    role: String,
    biography: String,
    //profilePic: imageSchema,
    music: [musicSchema],
    food: [foodSchema],
    movies: [movieSchema],
    animals: [animalSchema],
    hobby: [hobbySchema],
    interest: [interestSchema],
    musician: [musicianSchema],
    language: [languageSchema],
});

residentSchema.methods.verifyPassword = function(password, callback) {
    bcrypt.compare(password, this.password, (err, valid) => {
        callback(err, valid)
    })
}

const Resident = mongoose.model('Resident', residentSchema, 'Residents')
module.exports = Resident
