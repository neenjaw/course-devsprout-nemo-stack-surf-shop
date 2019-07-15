const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  // title
  title: {
    type: String,
    required: true
  },
  // price -- in cents
  price: {
    type: Number,
    get: cents => (cents/100).toFixed(2),
    set: dollars => dollars * 100,
    required: true
  },
  // description
  description: {
    type: String,
    required: true
  },
  // author
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // reviews
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }],
  // images
  images: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image'
  }],
  // location
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location'
  }
});

module.exports = {
  PostSchema: PostSchema,
  Post: mongoose.model('post', PostSchema)
};