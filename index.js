// Load envioronment variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router()
const exphbs = require('express-handlebars')

const app = express();
const PORT = process.env.PORT || 3000


// TODO: add handlebars handling code, can do after adding handlebars helpers

app.use('/', router)
/*
// Connect to DB
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost', {
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

app.listen(PORT, () => {
    console.log('Listening on Port ' + PORT);
})

// module.exports = mongooseClient
