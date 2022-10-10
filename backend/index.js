const express = require('express')

const app = express()
const PORT = process.env.PORT || 9000

require('./models/index')
app.use(express.static(__dirname))

var bodyParser = require('body-parser');
var mongoose = require('mongoose')
const Residents = require("./models/resident")
var residentRouter = require("./routes/residentRouter")

var fs = require('fs');
var path = require('path');
require('dotenv/config');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
  
// Set EJS as templating engine 
app.set("view engine", "ejs");

var multer = require('multer');
  
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

app.listen(PORT, () => {
    console.log('Listening on Port ' + PORT);
})

