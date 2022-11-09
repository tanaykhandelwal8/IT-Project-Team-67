if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')

const app = express()
const path = require('path');
const PORT = process.env.PORT || 3001

/*
// Serve static files from the React frontend app
//app.use(express.static(path.join(__dirname, '../frontend/build')))
app.use(express.static('client/build'))

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
    //res.sendFile(path.join(__dirname + '/../frontend/build/index.html'))
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')) // relative path
})
*/
//const path = require("path");


require('./models/index')
app.use(express.static(__dirname))

var bodyParser = require('body-parser');
var mongoose = require('mongoose')

//var residentRouter = require("./routes/residentRouter")

const Residents = require("./models/resident")
const Musics = require("./models/music")
const Foods = require("./models/food")
const Animals = require("./models/animal")
const Movies = require("./models/movie")
const Hobby = require("./models/hobby")
const Languages = require("./models/language")
const Musicians = require("./models/musician")
const Interests = require("./models/interest")

var fs = require('fs');
require('dotenv/config');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Set EJS as templating engine
app.set("view engine", "ejs");

const multer = require('multer');
const ImageModel = require("./models/image")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({ storage: storage }).single('testImg');

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
        }
    })
})
// Imports
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const session = require('express-session')
const flash = require('express-flash')
const passportlocal = require('passport-local').Strategy

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
    origin: "https://it-project-team-67.herokuapp.com/",
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

app.use(flash())

const residentRouter = require("./routes/residentRouter");
const staffRouter = require("./routes/staffRouter");
app.use("/resident", residentRouter);
app.use("/staff", staffRouter);

/*app.post('/login', (req,res) => {
    console.log("HELLO");
    console.log(req.body);

})
*/

const authRouter = require('./routes/auth')
app.use(authRouter.router)

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.post('/view-other-resident', (req, res) => {
    console.log("HERE");
})

require('./models')
const resident = require('./models/resident')
const staff = require('./models/staff')
const calendar = require('./models/calendar')
const music = require('./models/music')
const interest = require('./models/interest')
const food = require('./models/food')
const hobby = require('./models/hobby')
const musician = require('./models/musician')
const animals = require('./models/animal')
const movies = require('./models/movie')
const language = require('./models/language')

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

app.get('/get-music-data', (req, res) => {
    music.find().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
    })
})

app.get('/get-hobby-data', (req, res) => {
    hobby.find().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
    })
})

app.get('/get-interest-data', (req, res) => {
    interest.find().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
    })
})

app.get('/get-movie-data', (req, res) => {
    movies.find().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
    })
})

app.get('/get-food-data', (req, res) => {
    food.find().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
    })
})

app.get('/get-musician-data', (req, res) => {
    musician.find().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
    })
})

app.get('/get-language-data', (req, res) => {
    language.find().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
    })
})

app.get('/get-animal-data', (req, res) => {
    animals.find().then((result) => {
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


/*
app.post('/login', (req, res, next) => {
    passport.authenticate('resident-local', {
        successRedirect:'success',
        failureRedirect:'failure',
        failureFlash: true
    })
})
*/
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
                dateOfBirth: req.body.dob,
                biography: "Edit Me!",
                role: "Resident"
            })
            await newResident.save()
            console.log('resident created')
            resident.findOne({email:req.body.email}, async (err, doc) => {
                if(err) throw err
                if(doc) {
                    userId = doc.id;
                
                var redir = { redirect: "/success",
                        id: userId  };
                return res.json(redir);
                }
                console.log("uh oh");
            })
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
                dateOfBirth: req.body.dob,
                role: "Staff"
            })
            await newStaff.save()
            console.log('staff added')
        }
    })
})

app.post('/update-music-preferences', async (req, res) => {
    const filter = {_id: req.body.objects[0]};
    const update = {music: req.body.objects[1]};

    await resident.findOneAndUpdate(filter, update);

    console.log('music preferences updated');

})

app.post('/update-food-preferences', async (req, res) => {
    const filter = {_id: req.body.objects[0]};
    const update = {food: req.body.objects[1]};

    await resident.findOneAndUpdate(filter, update);

    console.log('food preferences updated');

})

app.post('/update-hobby-preferences', async (req, res) => {
    const filter = {_id: req.body.objects[0]};
    const update = {hobby: req.body.objects[1]};

    await resident.findOneAndUpdate(filter, update);

    console.log('hobby preferences updated');

})

app.post('/update-interest-preferences', async (req, res) => {
    const filter = {_id: req.body.objects[0]};
    const update = {interest: req.body.objects[1]};

    await resident.findOneAndUpdate(filter, update);

    console.log('interest preferences updated');

})

app.post('/update-musician-preferences', async (req, res) => {
    const filter = {_id: req.body.objects[0]};
    const update = {musician: req.body.objects[1]};

    await resident.findOneAndUpdate(filter, update);

    console.log('musician preferences updated');


})

app.post('/update-movie-preferences', async (req, res) => {
    const filter = {_id: req.body.objects[0]};
    const update = {movies: req.body.objects[1]};

    await resident.findOneAndUpdate(filter, update);

    console.log('movie preferences updated');

})

app.post('/update-animal-preferences', async (req, res) => {
    const filter = {_id: req.body.objects[0]};
    const update = {animals: req.body.objects[1]};

    await resident.findOneAndUpdate(filter, update);

    console.log('animal preferences updated');

})

app.post('/update-language-preferences', async (req, res) => {
    const filter = {_id: req.body.objects[0]};
    const update = {language: req.body.objects[1]};

    await resident.findOneAndUpdate(filter, update);

    console.log('language preferences updated');

})

//app.use('/resident', residentRouter);

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

app.get('/hobby', async (req, res) => {
    const hobby = await Hobby.find()
    if (hobby.length > 0){
        res.send(hobby)
    }   else {
        res.send( {result: "No hobbies Found"})
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

app.get('/animal', async (req, res) => {
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

if(process.env.NODE_ENV === 'production') {
    app.use(express.static("frontend/build"))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,"frontend","build","index.html"))
    })
}

app.listen(process.env.PORT | PORT, () => {
    console.log('Listening on Port ' + process.env.PORT);
})