const passport = require('passport');

const { runMiddlewarePipeline } = require('../util/pipeline');
const { csrfProtection } = require('../middlewares/crsf-protection');

module.exports = {
  getLogin (req, res, next) {
    runMiddlewarePipeline(req, res, next, [
      csrfProtection,

      (req, res, next) => {
        res.render('login', {
          csrfToken: req.csrfToken(),
          title: 'NEMO Surf Shop ‒ Login'
        });
      }
    ]);
  },

  postLogin (req, res, next) {
    runMiddlewarePipeline(req, res, next, [
      csrfProtection,

      passport.authenticate('local', {
        // successRedirect: '/',
        failureRedirect: '/login'
      }),

      (req, res, next) => {
        res.redirect('/');
      }
    ]);
  },

  getLogout (req, res, next) {
    req.logout();
    res.redirect('/');
  }
};