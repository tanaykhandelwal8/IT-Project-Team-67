const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})


// TODO: Add all routes for login page


module.exports = router