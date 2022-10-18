const express = require('express')
const path = require("path");
const residentRouter = express.Router()
const Residents = require("../models/resident")
const bcrypt = require("bcryptjs");


residentRouter.get('/get-resident-data', (req, res) => {
    Residents.find().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
    })
})

residentRouter.get('/view-all-residents', async (req, res) => {
    const residents = await Residents.find()
    if (residents.length > 0){
        res.send(residents)
    }   else {
        res.send( {result: "No Residents Found"})
    }

})


residentRouter.post('/register-resident', (req, res) => {
    residents.findOne({email:req.body.email}, async (err, doc) => {
        if(err) throw err
        if(doc) res.send('user already exists')
        if(!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            const newResident = new residents({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: hashedPassword,
                email: req.body.email,
                location: req.body.location,
                dateOfBirth: req.body.dob,
                biography: "Edit Me!",
                role: "Resident"
            })
            await newResident.save()
            console.log('resident created')
        }
    })
})

module.exports = residentRouter