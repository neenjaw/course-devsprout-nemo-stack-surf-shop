const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  }
});

module.exports = {
  ImageSchema: ImageSchema,
  Image: mongoose.model('image', ImageSchema)
};