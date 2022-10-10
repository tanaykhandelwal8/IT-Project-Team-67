// Imports
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const passport = require('passport')
const passportLocal = require('passport-local').Strategy
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const session = require('express-session')
const bodyParser = require('body-parser')

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
// 404 for everything else
app.get('*', function(req, res){
    res.status(404).send('404');
});



app.post('/login', (req, res) => {
    console.log(req.body)
})
app.post('/register', (req, res) => {
    console.log(req.body)
})


app.listen(PORT, () => {
    console.log('Listening on Port ' + PORT);
})

