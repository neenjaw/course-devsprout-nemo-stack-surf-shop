var express = require('express');
var router = express.Router();

// Middlewares
const { errorHandler } = require('../middlewares/route-errors');
const { csrfProtection } = require('../middlewares/crsf-protection');

// Controllers
const { getPosts, getNewPost } = require('../controllers/posts');

// GET posts index - /posts
router.get('/', errorHandler(getPosts));

// GET new post form - /posts/new
router.get('/new', getNewPost );

// POST new post form - /posts
router.post('/', csrfProtection, (req, res, next) => {
  res.redirect('/posts');
});

// GET show post - /posts/:id
router.get('/:id', (req, res, next) => {
  res.render('posts/show', {
    title: 'NEMO Surf Shop ‒ Listing'
  });
});

// GET edit post form - /posts/:id/edit
router.get('/:id/edit', csrfProtection, (req, res, next) => {
  res.render('posts/edit', {
    csrfToken: req.csrfToken(),
    title: 'NEMO Surf Shop ‒ Edit Listing'
  });
});

// PUT update post form - /posts/:id
router.put('/:id', csrfProtection, (req, res, next) => {
  res.redirect('/posts');
});

// DELETE destroy post form - /posts/:id
router.delete('/:id', csrfProtection, (req, res, next) => {
  res.redirect('/posts');
});

module.exports = router;
