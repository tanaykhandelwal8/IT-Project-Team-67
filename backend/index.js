const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001

require('./models')

const resident = require('./models/resident')
const staff = require('./models/staff')
app.get('/', (req, res) => {
    res.send("hello world")
})

app.get('/get-resident-data', (req, res) => {
    resident.find().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
    })
})

app.get('/get-staff-data', (req, res) => {
    staff.find().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
    })
})

app.get('*', function(req, res){
    res.status(404).send('404');
});

app.get('/')
app.listen(PORT, () => {
    console.log('Listening on Port ' + PORT);
})

