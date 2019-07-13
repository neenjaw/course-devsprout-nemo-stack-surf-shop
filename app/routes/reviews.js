var express = require('express');
var router = express.Router({ mergeParams: true });

/* GET reviews index - /posts/:id/reviews */
router.get('/', (req, res, next) => {
  res.render('reviews/index', { title: 'NEMO Surf Shop ‒ Listing Reviews' });
});

/* GET new post form - /posts/:id/reviews/new */
// router.get('/new', (req, res, next) => {
//   res.render('reviews/new', { title: 'NEMO Surf Shop ‒ New Listing Review' });
// });

/* POST new post form - /posts/:id/reviews */
router.post('/', (req, res, next) => {
  res.redirect('/reviews');
});

/* GET show post - /posts/:id/reviews/:review_id */
// router.get('/:review_id', (req, res, next) => {
//   res.render('reviews/show', { title: 'NEMO Surf Shop ‒ Listing Review' });
// });

/* GET edit post form - /posts/:id/reviews/:review_id/edit */
router.get('/:review_id/edit', (req, res, next) => {
  res.render('reviews/edit', { title: 'NEMO Surf Shop ‒ Edit Listing Review' });
});

/* PUT update post form - /posts/:id/reviews/:review_id */
router.put('/:review_id', (req, res, next) => {
  res.redirect('/reviews');
});

/* DELETE destroy post form - /posts/:id/reviews/:review_id */
router.delete('/:review_id', (req, res, next) => {
  res.redirect('/reviews');
});

module.exports = router;
