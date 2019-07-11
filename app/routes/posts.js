var express = require('express');
var router = express.Router();

/* GET posts index - /posts */
router.get('/', (req, res, next) => {
  res.render('posts/index', { title: 'NEMO Surf Shop -- Listings' });
});

/* GET new post form - /posts/new */
router.get('/new', (req, res, next) => {
  res.render('posts/new', { title: 'NEMO Surf Shop -- New Listing' });
});

/* POST new post form - /posts */
router.post('/', (req, res, next) => {
  res.redirect('/posts');
});

/* GET show post - /posts/:id */
router.get('/:id', (req, res, next) => {
  res.render('posts/show', { title: 'NEMO Surf Shop -- Listing' });
});

/* GET edit post form - /posts/:id/edit */
router.get('/:id/edit', (req, res, next) => {
  res.render('posts/edit', { title: 'NEMO Surf Shop -- Edit Listing' });
});

/* PUT update post form - /posts/:id */
router.put('/:id', (req, res, next) => {
  res.redirect('/posts');
});

/* DELETE destroy post form - /posts/:id */
router.delete('/:id', (req, res, next) => {
  res.redirect('/posts');
});

module.exports = router;
