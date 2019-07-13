const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  // author
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  // title
  title: String,
  // body
  body: String,
  // reviews
  review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  },
});

const Review = mongoose.model('review', ReviewSchema);

module.exports = {
  ReviewSchema: ReviewSchema,
  Review: Review
};