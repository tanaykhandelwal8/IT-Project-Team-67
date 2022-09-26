// Load envioronment variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};
const mongoose = require('mongoose');
const express = require('express');
const exphbs = require('express-handlebars')
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.static(__dirname))

// TODO: add handlebars handling code, can do after adding handlebars helpers

var indexRouter = require('./routes/router')
var residentRouter = require('./routes/residentRouter')
var staffRouter = require('./routes/staffRouter')
app.use('/', indexRouter)
app.use('/', residentRouter)

app.listen(PORT, () => {
    console.log('Listening on Port ' + PORT);
})

