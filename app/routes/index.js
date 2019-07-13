var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'NEMO Surf Shop ‒ Home' });
});

/* GET register page. */
router.get('/register', (req, res, next) => {
  res.render('index', { title: 'NEMO Surf Shop ‒ Register' });
});

/* POST register. */
router.post('/register', (req, res, next) => {
  res.redirect('/');
});

/* GET login page. */
router.get('/login', (req, res, next) => {
  res.render('login', { title: 'NEMO Surf Shop ‒ Login' });
});

/* POST login */
router.post('/login', (req, res, next) => {
  res.redirect('/');
});

/* GET logout page. */
router.get('/logout', (req, res, next) => {
  res.render('logout', { title: 'NEMO Surf Shop ‒ Logout' });
});

/* GET /profile */
router.get('/profile', (req, res, next) => {
  // need some middleware here to grab your current user id 
  // and inject it into the redirect.
  res.redirect('/users/:user_id/profile');
});

/* GET /forgot */
router.get('/forgot', (req, res, next) => {
  res.render('forgot', { 
    title: 'NEMO Surf Shop ‒ Forgot Password' 
  });
});

/* PUT /forgot */
router.put('/forgot', (req, res, next) => {
  res.render('forgot_notification', { 
    title: 'NEMO Surf Shop ‒ Forgot Password' 
  });
});

/* GET /reset */
router.get('/reset/:token', (req, res, next) => {
  res.render('reset', { 
    title: 'NEMO Surf Shop ‒ Reset Password' 
  });
});

/* POST /reset */
router.put('/reset/:token', (req, res, next) => {
  res.render('reset_notification', { 
    title: 'NEMO Surf Shop ‒ Reset Password' 
  });
});

module.exports = router;
