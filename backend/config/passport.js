const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const resident = require('../models/resident')
const staff = require('../models/staff')

module.exports = function(passport) {

    passport.use(
        new LocalStrategy((username, password, done) => {
                resident.findOne({email: username}, (err, user) => {
                    if (err)
                        throw err
                    if (!user)
                        return done(null, false)
                    bcrypt.compare(password, user.password, (err, result) => {
                        if (err)
                            throw err
                        if (result === true)
                            return done(null, user)
                        return done(null, false)
                    })
                })

            }
        ))

    passport.serializeUser((user, cb) => {
        cb.(null, user.id)
    })

    passport.deserializeUser((id, cb) => {
        resident.findOne({_id:id})
    })
}
