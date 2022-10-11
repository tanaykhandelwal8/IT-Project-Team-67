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


app.listen(PORT, () => {
    console.log('Listening on Port ' + PORT);
})

