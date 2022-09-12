const express = require('express')
const path = require("path");
const residentRouter = express.Router()

residentRouter.get('/resident-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'resident-dashboard.html'))
})

residentRouter.get('/view-all-residents', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'view-all-residents.html'))
})

residentRouter.get('/music-preferences', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'music-preferences.html'))
})
// TODO: Add all routes for resident page


module.exports = residentRouter