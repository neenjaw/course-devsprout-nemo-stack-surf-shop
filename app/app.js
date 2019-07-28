// Util libs
const debug = require('debug')('nemo-surf-shop:app');
const checklist = require('./util/checklist');

// Express Libs
const mongoose = require('mongoose');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');

// Routes
const indexRouter   = require('./routes/index');
const usersRouter   = require('./routes/users');
const postsRouter   = require('./routes/posts');
const reviewsRouter = require('./routes/reviews');

const app = express();

// all environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const _session_secret = process.env.SESSION_SECRET || 'Shh, its a secret!';
if (!process.env.SESSION_SECRET) debug(checklist.print('WARNING', 'SESSION_SECRET is not set, using default!'));
app.use(session({ 
  secret: _session_secret,
  name: 'sessionId',
  resave: false,
  saveUninitialized: true
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/posts/:id/reviews', reviewsRouter);

// catch EBADCSRFTOKEN and forward to error handler
app.use(function(err, req, res, next) {
  if (err.code !== 'EBADCSRFTOKEN') return next(err);

  next(createError(403, 'Form has been tampered with.'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;