const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // email
  email: String,
  // username
  username: String,
  // password
  password: String,
  // posts
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  // reviews
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }]
});

const User = mongoose.model('user', UserSchema);

module.exports = {
  UserSchema: UserSchema,
  User: User
};