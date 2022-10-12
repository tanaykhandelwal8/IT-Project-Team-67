var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
        {
            data: Buffer,
            contentType: String
        }
});

//Image is a model which has a schema imageSchema
<<<<<<< HEAD
  
//module.exports = new mongoose.model('Image', imageSchema)
const Image = mongoose.model("Image", imageSchema, 'Images')
=======

const Image = new mongoose.model('Image', imageSchema)
>>>>>>> main
module.exports = Image

//https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
