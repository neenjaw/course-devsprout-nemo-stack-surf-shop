var express = require('express');
var router = express.Router();

/* ADMIN ROUTE - GET users index - /users */
router.get('/', (req, res, next) => {
  res.render('users/index', { title: 'NEMO Surf Shop ‒ Users' });
});

/* ADMIN ROUTE - GET new post form - /users/new */
router.get('/new', (req, res, next) => {
  res.render('users/new', { title: 'NEMO Surf Shop ‒ New User' });
});

/* ADMIN ROUTE - POST new post form - /users */
router.post('/', (req, res, next) => {
  res.redirect('/users');
});

/* GET show post - /users/:user_id */
router.get('/:user_id', (req, res, next) => {
  res.redirect('/:user_id/profile');
});

router.get('/:user_id/profile', (req, res, next) => {
  res.render('users/show', { title: 'NEMO Surf Shop ‒ Listing' });
});

/* GET edit post form - /users/:user_id/edit */
router.get('/:user_id/edit', (req, res, next) => {
  res.render('users/edit', { title: 'NEMO Surf Shop ‒ Edit Listing' });
});

/* PUT update post form - /users/:user_id */
router.put('/:user_id', (req, res, next) => {
  res.redirect('/users');
});

/* DELETE destroy post form - /users/:user_id */
router.delete('/:user_id', (req, res, next) => {
  res.redirect('/users');
});

module.exports = router;


module.exports = router;
