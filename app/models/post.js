const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  // title
  title: String,
  // price -- in cents
  price: {
    type: Number,
    get: cents => (cents/100).toFixed(2),
    set: dollars => dollars * 100
  },
  // description
  description: String,
  // author
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  // reviews
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }],
  // images
  // images: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Image'
  // }],
  // location
  // location: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Location'
  // }
});

const Post = mongoose.model('post', PostSchema);

module.exports = {
  PostSchema: PostSchema,
  Post: Post
};