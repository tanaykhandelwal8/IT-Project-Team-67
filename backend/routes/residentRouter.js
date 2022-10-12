const express = require('express')
const path = require("path");
const residentRouter = express.Router()
const Residents = require("../models/resident")

residentRouter.get('/api', (req, res) => {
    res.json({"users":["userOne","userTwo"]})
})
/*
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

residentRouter.get('/community-corner', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'views', 'community_corner.html'))
})
*/

residentRouter.get('/view-all-residents', async (req, res) => {
    const residents = await Residents.find()
    if (residents.length > 0){
        res.send(residents)
    }   else {
        res.send( {result: "No Residents Found"})
    }

})

module.exports = residentRouter