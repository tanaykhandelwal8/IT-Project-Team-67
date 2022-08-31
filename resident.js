const mongoose = require("mongoose");

const musicSchema= new mongoose.Schema({
    genre: String,
    artist: String
});

const foodSchema= new mongoose.Schema({
    food: String
});

const movieSchema= new mongoose.Schema({
    genre: String,
    movie: String
});

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    apartmentNum: String,
    dateOfBirth: date,
    profilePic: imageSchema,
    music: musicSchema,
    food: foodSchema,
    moives: movieSchema
});

const Resident = mongoose.model('Resident', schema, 'Residents')
module.exports = Resident
