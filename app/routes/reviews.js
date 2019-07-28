var express = require('express');
var router = express.Router({ mergeParams: true });
const csrfProtection = require('../middlewares/crsf-protection');


/* GET reviews index - /posts/:id/reviews */
router.get('/', csrfProtection, (req, res, next) => {
  res.render('reviews/index', { 
    csrfToken: req.csrfToken(),
    title: 'NEMO Surf Shop ‒ Listing Reviews' 
  });
});

/* GET new post form - /posts/:id/reviews/new */
// router.get('/new', (req, res, next) => {
//   res.render('reviews/new', { title: 'NEMO Surf Shop ‒ New Listing Review' });
// });

/* POST new post form - /posts/:id/reviews */
router.post('/', csrfProtection, (req, res, next) => {
  res.redirect('/reviews');
});

/* GET show post - /posts/:id/reviews/:review_id */
// router.get('/:review_id', (req, res, next) => {
//   res.render('reviews/show', { title: 'NEMO Surf Shop ‒ Listing Review' });
// });

/* GET edit post form - /posts/:id/reviews/:review_id/edit */
router.get('/:review_id/edit', csrfProtection, (req, res, next) => {
  res.render('reviews/edit', { 
    csrfToken: req.csrfToken(),
    title: 'NEMO Surf Shop ‒ Edit Listing Review' 
  });
});

/* PUT update post form - /posts/:id/reviews/:review_id */
router.put('/:review_id', csrfProtection, (req, res, next) => {
  res.redirect('/reviews');
});

/* DELETE destroy post form - /posts/:id/reviews/:review_id */
router.delete('/:review_id', csrfProtection, (req, res, next) => {
  res.redirect('/reviews');
});

module.exports = router;
