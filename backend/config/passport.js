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