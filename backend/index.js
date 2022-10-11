const express = require('express')

const app = express()
const PORT = process.env.PORT || 9000

require('./models/index')
app.use(express.static(__dirname))

var bodyParser = require('body-parser');
var mongoose = require('mongoose')

var residentRouter = require("./routes/residentRouter")

const Residents = require("./models/resident")
const Musics = require("./models/music")
const Foods = require("./models/food")
const Animals = require("./models/animal")
const Movies = require("./models/movie")

var fs = require('fs');
var path = require('path');
require('dotenv/config');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
  
// Set EJS as templating engine 
app.set("view engine", "ejs");

var multer = require('multer');
const Music = require('./models/music')
  
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage });

app.use('/resident', residentRouter);

app.get('/', (req, res) => {
    res.send("Hello World!")
})



app.get('/view-all-residents', async (req, res) => {
    const residents = await Residents.find()
    if (residents.length > 0){
        res.send(residents)
    }   else {
        res.send( {result: "No Residents Found"})
    }

})

app.get('/music', async (req, res) => {
    const musics = await Musics.find()
    if (musics.length > 0){
        res.send(musics)
    }   else {
        res.send( {result: "No music Found"})
    }

})

app.get('/foods', async (req, res) => {
    const foods = await Foods.find()
    if (foods.length > 0){
        res.send(foods)
    }   else {
        res.send( {result: "No foods Found"})
    }

})

app.get('/animals', async (req, res) => {
    const animals = await Animals.find()
    if (animals.length > 0){
        res.send(animals)
    }   else {
        res.send( {result: "No animals Found"})
    }

})

app.get('/movies', async (req, res) => {
    const movies = await Movies.find()
    if (movies.length > 0){
        res.send(movies)
    }   else {
        res.send( {result: "No movies Found"})
    }

})

app.listen(PORT, () => {
    console.log('Listening on Port ' + PORT);
})

