// Lib Includes
const express = require('express');
const router = express.Router();

// Controllers
const { postRegister } = require('../controllers/register');
const { ensureAuthenticated, getLogin, postLogin, getLogout } = require('../controllers/authentication');

// Middlewares
const { csrfProtection } = require('../middlewares/crsf-protection');
const { errorHandler } = require('../middlewares/route-errors');

const handledPostRegister = errorHandler(postRegister);

// GET home page.
router.get('/', (req, res, next) => {
  res.render('index', { title: 'NEMO Surf Shop ‒ Home' });
});

// GET register page.
router.get('/register', csrfProtection, (req, res, next) => {
  res.render('register', {
    csrfToken: req.csrfToken(),
    title: 'NEMO Surf Shop ‒ Register'
  });
});

// POST register.
router.post(
  '/register', csrfProtection, handledPostRegister,
  (req, res, next) => {
    res.redirect('/');
  }
);

// GET login page.
router.get('/login', getLogin);

// POST login
router.post('/login', postLogin);

// GET logout page.
router.get('/logout', getLogout);

// GET /profile
router.get('/profile', ensureAuthenticated, (req, res, next) => {
  res.redirect(`/users/${req.user}/profile`);
});

// GET /forgot
router.get('/forgot', csrfProtection, (req, res, next) => {
  res.render('forgot', {
    csrfToken: req.csrfToken(),
    title: 'NEMO Surf Shop ‒ Forgot Password'
  });
});

// PUT /forgot
router.put('/forgot', csrfProtection, (req, res, next) => {
  res.render('forgot_notification', {
    title: 'NEMO Surf Shop ‒ Forgot Password'
  });
});

// GET /reset/:token
router.get('/reset/:token', csrfProtection, (req, res, next) => {
  res.render('reset', {
    csrfToken: req.csrfToken(),
    title: 'NEMO Surf Shop ‒ Reset Password'
  });
});

// POST /reset/:token
router.put('/reset/:token', csrfProtection, (req, res, next) => {
  res.render('reset_notification', {
    title: 'NEMO Surf Shop ‒ Reset Password'
  });
});

module.exports = router;
