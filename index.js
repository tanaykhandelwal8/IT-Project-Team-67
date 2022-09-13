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

// Connect to DB
/*mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'residencly'
});

// connect-mongo
const mongooseClient = mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    dbName: 'residencly' 
}).then((m) => m.connection.getClient())

// Exit on error
const db = mongoose.connection.on('error', err => {
    console.error(err);
    process.exit(1);
});
// Log to console once the database is open
db.once('open', async () => {
    console.log(`Mongo connection started on ${db.host}:${db.port}`);
});
*/
// TODO: add handlebars handling code, can do after adding handlebars helpers

var indexRouter = require('./routes/router')
var residentRouter = require('./routes/residentRouter')
var staffRouter = require('./routes/staffRouter')
app.use('/', indexRouter)
app.use('/', residentRouter)

app.listen(PORT, () => {
    console.log('Listening on Port ' + PORT);
})


