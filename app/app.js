// Util libs
const debug = require('debug')('nemo-surf-shop:app');
const checklist = require('./util/checklist');

// Express Libs
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
const passport = require('passport');

// Routes
const indexRouter   = require('./routes/index');
const usersRouter   = require('./routes/users');
const postsRouter   = require('./routes/posts');
const reviewsRouter = require('./routes/reviews');

// Get the app instance
const app = express();

// Mongoose - Configure & Connect
const mongoose = require('mongoose');

if (!process.env.MONGO_HOST) debug(checklist.print('WARNING', 'MONGO_HOST is not set, using default!'));
if (!process.env.MONGO_PORT) debug(checklist.print('WARNING', 'MONGO_PORT is not set, using default!'));
if (!process.env.MONGO_DB) debug(checklist.print('WARNING', 'MONGO_DB is not set, using default!'));

const _mongo_host = process.env.MONGO_HOST || 'localhost';
const _mongo_port = process.env.MONGO_PORT || '27017';
const _mongo_db   = process.env.MONGO_DB   || 'nemo_default';

mongoose.connect(
  `mongodb://${_mongo_host}:${_mongo_port}/${_mongo_db}`,
  {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => debug(checklist.print('OK', 'MONGO_DB is connected!')))
  .catch(err => debug(checklist.print('ERROR', 'MONGO_DB connection error!\n'+ err)));

// Configure all app environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Configure Sessions
const _session_secret = process.env.SESSION_SECRET || 'Shh, its a secret!';
if (!process.env.SESSION_SECRET) debug(checklist.print('WARNING', 'SESSION_SECRET is not set, using default!'));
app.use(session({
  secret: _session_secret,
  name: 'sessionId',
  resave: false,
  saveUninitialized: true
}));

// Configure Passport
const { User } = require('./models/user');

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(passport.initialize());
app.use(passport.session());

// Mount routes
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