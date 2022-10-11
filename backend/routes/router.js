const express = require('express')
const router = express.Router()
const path = require('path')
const Resident = require('../models/resident')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})


// TODO: Add all routes for login page



module.exports = router