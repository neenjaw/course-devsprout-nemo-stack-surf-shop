const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  // author
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // title
  title: String,
  // body
  body: {
    type: String,
    required: true
  },
  // post
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
});

module.exports = {
  ReviewSchema: ReviewSchema,
  Review: mongoose.model('review', ReviewSchema)
};