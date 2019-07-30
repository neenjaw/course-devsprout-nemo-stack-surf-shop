// Model
const { Post } = require('../models/post');

// Middleware
const { csrfProtection } = require('../middlewares/crsf-protection');

// Pipeline
const { runMiddlewarePipeline } = require('../util/pipeline');

module.exports = {
  async getPosts (req, res, next) {
    const posts = await Post.find({});

    res.render('posts/index', {
      title: 'NEMO Surf Shop ‒ Listings',
      posts
    });
  },

  getNewPost (req, res, next) {
    runMiddlewarePipeline(req, res, next, [
      csrfProtection,

      (req, res, next) => {
        res.render('posts/new', {
          csrfToken: req.csrfToken(),
          title: 'NEMO Surf Shop ‒ New Listing'
        });
      }
    ]);
  }
};