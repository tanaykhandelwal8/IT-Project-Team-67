const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const SALT_FACTOR = 10

const imageSchema = require('./image')
const groupSchema = new mongoose.Schema({
    groupType: String
});
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

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    location: String,
    dateOfBirth: Date,
    //profilePic: imageSchema,
    //music: musicSchema,
    //food: foodSchema,
    //movies: movieSchema,
    //animals: animalSchema,
    //group:groupSchema
});

schema.methods.verifyPassword = function(password, callback) {
    bcrypt.compare(password, this.password, (err, valid) => {
        callback(err, valid)
    })
}


const Resident = mongoose.model('Resident', schema, 'Residents')
module.exports = Resident
