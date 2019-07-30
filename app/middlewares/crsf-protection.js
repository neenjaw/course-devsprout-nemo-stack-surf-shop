const csrf = require('csurf');
// const csrfProtection = csrf();

// Disable csrf-protection in development
module.exports = {
  csrfProtection: (() => {
    if (process.env.NODE_ENV == 'xdev') {
      return (req, res, next) => {
        req.csrfToken = () => '';
        next();
      };
    } else {
      return csrf();
    }
  })()
};