const express = require('express')

const app = express()
const PORT = process.env.PORT || 6000

require('./models/index')
app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.send("Hello World!")
})
app.listen(PORT, () => {
    console.log('Listening on Port ' + PORT);
})

