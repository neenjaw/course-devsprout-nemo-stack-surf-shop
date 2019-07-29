var express = require('express');
var router = express.Router();

const { User } = require('../models/user');

// Middlewares
const { csrfProtection } = require('../middlewares/crsf-protection');

/* ADMIN ROUTE - GET users index - /users */
router.get('/', csrfProtection, (req, res, next) => {

  User.find({}, (err, users) => {
    if (err) {
      res.redirect('/');
    }

    const userMap = {};

    users.forEach(user => userMap[user.username] = user);

    console.log(userMap);

    res.render('users/index', {
      csrfToken: req.csrfToken(),
      title: 'NEMO Surf Shop ‒ Users',
      users: userMap
    });
  });
});

/* ADMIN ROUTE - GET new post form - /users/new */
router.get('/new', csrfProtection, (req, res, next) => {
  res.render('users/new', {
    csrfToken: req.csrfToken(),
    title: 'NEMO Surf Shop ‒ New User'
  });
});

/* ADMIN ROUTE - POST new post form - /users */
router.post('/', csrfProtection, (req, res, next) => {
  res.redirect('/users');
});

/* GET show post - /users/:user_id */
router.get('/:user_id', (req, res, next) => {
  res.redirect('/:user_id/profile');
});

router.get('/:user_id/profile', csrfProtection, (req, res, next) => {
  res.render('users/show', {  
    csrfToken: req.csrfToken(),
    title: 'NEMO Surf Shop ‒ Listing' 
  });
});

/* GET edit post form - /users/:user_id/edit */
router.get('/:user_id/edit', csrfProtection, (req, res, next) => {
  res.render('users/edit', {  
    csrfToken: req.csrfToken(),
    title: 'NEMO Surf Shop ‒ Edit Listing' 
  });
});

/* PUT update post form - /users/:user_id */
router.put('/:user_id', csrfProtection, (req, res, next) => {
  res.redirect('/users');
});

/* DELETE destroy post form - /users/:user_id */
router.delete('/:user_id', csrfProtection, (req, res, next) => {
  res.redirect('/users');
});

module.exports = router;
