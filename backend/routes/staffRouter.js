const express = require('express')
const staffRouter = express.Router()
const Staff = require('../models/staff')

staffRouter.get('/get-staff-data', (req, res) => {
    Staff.find().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
    })
})

// will hold all routes for the staff page


module.exports = staffRouter