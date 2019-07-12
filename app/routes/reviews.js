var express = require('express');
var router = express.Router();

/* GET reviews index - /reviews */
router.get('/', (req, res, next) => {
  res.render('reviews/index', { title: 'NEMO Surf Shop ‒ Listings' });
});

/* GET new post form - /reviews/new */
router.get('/new', (req, res, next) => {
  res.render('reviews/new', { title: 'NEMO Surf Shop ‒ New Listing' });
});

/* POST new post form - /reviews */
router.post('/', (req, res, next) => {
  res.redirect('/reviews');
});

/* GET show post - /reviews/:id */
router.get('/:id', (req, res, next) => {
  res.render('reviews/show', { title: 'NEMO Surf Shop ‒ Listing' });
});

/* GET edit post form - /reviews/:id/edit */
router.get('/:id/edit', (req, res, next) => {
  res.render('reviews/edit', { title: 'NEMO Surf Shop ‒ Edit Listing' });
});

/* PUT update post form - /reviews/:id */
router.put('/:id', (req, res, next) => {
  res.redirect('/reviews');
});

/* DELETE destroy post form - /reviews/:id */
router.delete('/:id', (req, res, next) => {
  res.redirect('/reviews');
});

module.exports = router;
