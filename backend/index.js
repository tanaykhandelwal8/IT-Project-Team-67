// Imports
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const session = require('express-session')
const bodyParser = require('body-parser')
const passport = require('passport')
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

app.use(cookieParser("secretcode"))
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)


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


// 404 for everything else
app.get('*', function(req, res){
    res.status(404).send('404');
});



app.post('/login', (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if(err)
            throw err
        if(!user)
            res.send("no user")
        req.logIn(user, err => {
            if(err)
                throw err
            res.send("authenticated")
            console.log(req.user)
        })
    })(req, res, next)
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

