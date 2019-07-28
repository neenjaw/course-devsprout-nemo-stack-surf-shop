const csrf = require('csurf');
// const csrfProtection = csrf();

// Disable csrf-protection in development
let csrfProtection;
if (process.env.NODE_ENV == 'dev') {
  csrfProtection = (req, res, next) => {
    req.csrfToken = () => '';
    next();
  };
} else {
  csrfProtection = csrf();
}

module.exports = csrfProtection;