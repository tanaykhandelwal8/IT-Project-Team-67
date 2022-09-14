const mongoose = require("mongoose");
const groupSchema = new mongoose.Schema({
    groupType: String
});
const animalSchema= new mongoose.Schema({
    animal: String
    //image
});

const musicSchema= new mongoose.Schema({
    genre: String,
    artist: String
    //image
});

const foodSchema= new mongoose.Schema({
    food: String
    //image
});

const movieSchema= new mongoose.Schema({
    genre: String,
    title: String
    //image
});

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    apartmentNum: String,
    dateOfBirth: date,
    profilePic: imageSchema,
    music: musicSchema,
    food: foodSchema,
    moives: movieSchema,
    animals: animalSchema,
    group:groupSchema
    //image
});

const Resident = mongoose.model('Resident', schema, 'Residents')
module.exports = Resident
