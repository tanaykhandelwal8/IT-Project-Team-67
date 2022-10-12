const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001

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
const ImageModel = require("./models/image")
  
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage }).single('testImg');

app.post('/post', (req, res) => {
    upload(req, res, (err)=>{
        if (err){
            console.log(err);
        }
        else{
            const newImage = new ImageModel({
                name: req.body.name,
                img:{
                    data: req.file.filename,
                    contentType: 'image/png'
                }
            })
            newImage.save().then(() => res.send('success').catch(err=>console.log(err)))
// Imports
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const session = require('express-session')
const bodyParser = require('body-parser')
const passportlocal = require('passport-local').Strategy
const app = express()
const PORT = process.env.PORT || 3001

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized:true
}))
const passport = require('./config/passport')
app.use(passport.initialize())
app.use(passport.session())

app.use(cookieParser("secretcode"))

require('./models')
const resident = require('./models/resident')
const staff = require('./models/staff')
const calendar = require('./models/calendar')

app.get('/', (req, res) => {
    res.send("hello world")
})
app.get('/get-resident-data', (req, res) => {
    resident.find().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
    })
})
app.get('/get-staff-data', (req, res) => {
    staff.find().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
    })
})
app.get('/get-events-data', (req, res) => {
    calendar.find().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
    })
})
app.get('/user', (req, res) => {

})

app.get('/success', (req, res) => {
    res.send('success')

})

app.get('/failure', (req, res) => {
    res.send('failure')

})

// 404 for everything else
app.get('*', function(req, res){
    res.status(404).send('404');
});



app.post('/login', (req, res, next) => {
    passport.authenticate('resident-local', {
        successRedirect:'success',
        failureRedirect:'failure',
        failureFlash: true
    })
})
app.post('/register-resident', (req, res) => {
    resident.findOne({email:req.body.email}, async (err, doc) => {
        if(err) throw err
        if(doc) res.send('user already exists')
        if(!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            const newResident = new resident({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: hashedPassword,
                email: req.body.email,
                location: req.body.location,
                dateOfBirth: req.body.dob
            })
            await newResident.save()
            console.log('resident created')
        }
    })
})
app.post('/register-staff', (req, res) => {
    staff.findOne({email:req.body.email}, async (err, doc) => {
        if(err) throw err
        if(doc) res.send('user already exists')
        if(!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            const newStaff = new staff({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: hashedPassword,
                email: req.body.email,
                dateOfBirth: req.body.dob
            })
            await newStaff.save()
            console.log('staff added')
        }
    })
})

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

/* sending a new event to mongo */ 
app.post('/add-event', (req, res) => {
    calendar.findOne({title:req.body.title}, async (err, doc) => {
        if(err) throw err
        if(doc) res.send('event already exists')
        if(!doc) {
            const newEvent = new calendar({
                title: req.body.title,
                description: req.body.description,
                location: req.body.location,
                host: req.body.host,
                start: req.body.start,
                end: req.body.end
            })
            await newEvent.save()
            console.log('event added')
        }
    })
})

/* deleting an event from mongo */ 
app.post('/delete-event', (req, res) =>{
    calendar.deleteOne({ 
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        host: req.body.host,
        start: req.body.start,
        end: req.body.end},
        function (err) {
            if(err) console.log(err);
            console.log("Successful deletion");
      });
})
app.listen(PORT, () => {
    console.log('Listening on Port ' + PORT);
})


