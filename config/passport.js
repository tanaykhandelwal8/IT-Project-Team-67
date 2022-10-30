/*
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const passport = require('passport')
const resident = require('../models/resident')
const staff = require('../models/staff')

passport.serializeUser((user, done) => {
    done(undefined, user._id)
})


passport.deserializeUser((userId, done) => {
    resident.findById(userId, {password:0}, (err, user) => {
        if(err)
            return done(err, undefined)
        if(user == null) {
            staff.findById(userId, {password: 0}, (err, user) => {
                if(err)
                    return done(err, undefined)
                return done(undefined, user)
            })
        }
        else {
            return done(undefined, user)
        }
    })
})

passport.use('resident-local',
    new LocalStrategy((username, password, done) => {
        resident.findOne({email:username}, {}, {}, (err, user) => {
            if(err)
                return done(undefined, false, {message: 'unknown error'})
            if(!user)
                return done(undefined, false, {message: 'username'})
            user.verifyPassword(password, (err, valid) => {
                if(err)
                    return done(undefined, false, {message:'unknown'})
                if(!valid)
                    return done(undefined, false, {message: 'password'})
                return done(undefined, user)
            })
        })
    }))


passport.use('staff-local',
    new LocalStrategy((username, password, done) => {
        staff.findOne({email:username}, {}, {}, (err, user) => {
            if(err)
                return done(undefined, false, {message: 'unknown error'})
            if(!user)
                return done(undefined, false, {message: 'username'})
            user.verifyPassword(password, (err, valid) => {
                if(err)
                    return done(undefined, false, {message: 'unknown'})
                if(!valid)
                    return done(undefined, false, {message: 'password'})
                return done(undefined, user)
            })
        })
    }))


module.exports = passport
*/
const passport = require('passport')
const Staff = require('../models/staff')
const Resident = require('../models/resident')
const LocalStrategy = require('passport-local').Strategy

// Updated serialize/deserialize functions
passport.serializeUser((user, done) => {
    done(undefined, user._id)
});

passport.deserializeUser((userId, done) => {
    // Check resident collection first
    resident = Resident.findById(userId, { password: 0 })
    if (resident) {
        return done(undefined, resident)
    } else {  // User is either staff or does not exist
        Staff.findById(userId, { password: 0 }, (err, user) => {
            if (err) {
                return done(err, undefined)
            }
            return done(undefined, user)
        })
    }
})

// Updated LocalStrategy function
passport.use(
    new LocalStrategy( async (username, password, done) => {
        // Check resident collection first
        resident = await Resident.findOne({ email: username})
        if (resident) {
            // Check password
            resident.verifyPassword(password, (err, valid) => {
                if (err) {
                    return done(undefined, false, {
                        message: 'Unknown error has occurred'
                    })
                }
                if (!valid) {
                    return done(undefined, false, {
                        message: 'Incorrect email or password',
                    })
                }
                // If user exists and password matches the hash in the database
                //console.log(resident);
                return done(undefined, resident)
            })
        }
        else { // User is either staff or does not exist
            Staff.findOne({ email: username }, {}, {}, (err, user) => {
                if (err) {
                    return done(undefined, false, {
                        message: 'Unknown error has occurred'
                    })
                }
                if (!user) {
                    return done(undefined, false, {
                        message: 'Incorrect email or password',
                    })
                }
    
                // Check password
                user.verifyPassword(password, (err, valid) => {
                    if (err) {
                        return done(undefined, false, {
                            message: 'Unknown error has occurred'
                        })
                    }
                    if (!valid) {
                        return done(undefined, false, {
                            message: 'Incorrect email or password',
                        })
                    }
                    // If user exists and password matches the hash in the database
                    return done(undefined, user)
                })
            })
        }
    })
)

module.exports = passport