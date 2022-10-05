const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const resident = require('../models/resident')
const staff = require('../models/staff')

passport.serializeUser((user, done) => {
    // Use id to serialize user
    done(undefined, user._id)
})

