// Util libs
const debug = require('debug')('nemo-surf-shop:controller');
const checklist = require('../util/checklist');

const User = require('../models/user').User;

module.exports = {
  postRegister(req, res, next) {
    debug(checklist.print('INFO', 'Attempting user registation.'));

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      image: req.body.image
    });

    User.register(newUser, req.body.password, (err) => {
      if (err) {
        debug(checklist.print('ERROR', 'Error registering user.'));
        return next(err);
      }

      debug(checklist.print('OK', 'Registered user!'));

      res.redirect('/');
    });
  }
};