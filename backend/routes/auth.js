const passport = require('../config/passport')
const express = require('express')
const Resident = require('../models/resident')
const router = express.Router()
// Authentication middleware
const checkAuth = (req, res, next) => {
    // If user is not authenticated via passport, redirect to login page
    console.log("hello there")
    if (!req.isAuthenticated()) {
        console.log("redirected");
        return res.redirect('/login')
    }
    // Otherwise, proceed to next middleware function
    console.log("Not redirected");
    return next()
}

/*
// Main page which requires login to access
// Note use of authentication middleware here
router.get('/loginredirect', checkAuth, (req, res) => {
    console.log("fail")   
    userId = req.session.passport.user
    console.log("success")

    Resident.findById(userId, (err, user) => {
        if (user) {
            console.log("success")
            return res.redirect('/resident-dashboard')
            //return res.redirect('/resident/' + userId + '/dashboard')
        }
        res.redirect('/staff/' + userId + '/dashboard')
    })
})
*/
router.get('/loginredirect', (req, res) => {
    console.log("HELLLOOOOOOOOOOOOOOOOOOO")
})

// Login page (with failure message displayed upon login failure)
router.get('/login', (req, res) => {
    console.log("login failure")
    res.render('login', { flash: req.flash('error'), title: 'Login' })
})

// Handle login
//router.post('/login',
    //passport.authenticate('local', {
    //    successRedirect: '/loginredirect', failureRedirect: '/login', failureFlash: true
    //})
    //passport.authenticate('local', {
    //    successRedirect: '/resident-dashboard', failureRedirect: '/login', failureFlash: true
    //})
    
//)

router.post(
    '/login',
    passport.authenticate('local', {
      failureRedirect: '/login'
    }), (req, res) => {
        //console.log(res)
        console.log("///////////////////////////////////////////////////////")
        console.log(req.user)
        if (req.user.role == 'Resident') {
            console.log('redirect to resident dash')
            console.log(req.user.email)
            userId = req.session.passport.user
            console.log(req.user.id)
            console.log(userId)
            var redir = { redirect: "/resident-dashboard",
                        id: userId  };
            return res.json(redir);
        }
        else if (req.user.role == 'Staff') {
            console.log('redirect to staff dash')
            console.log(req.user.email)
            var redir = { redirect: "/staff-dashboard",
                          id: req.user.id };
            return res.json(redir);
        }
        else{
        console.log('no')
        res.redirect('/login');
      }
    /*
      if (req.user.isAdmin === false) {
        res.redirect('/dashboard/received');
      }
      */
    });

// Handle logout
router.post('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

module.exports = {
    router,
    checkAuth
}