const termColor = require('./util/termColor');
const checklist = require('./util/checklist');

console.log(checklist.print('OK', 'NEMO Surf Shop Loading!'));
 
const http = require('http');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express();

// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static server
app.use(express.static(path.join(__dirname, 'public')));

// Default route
app.get('/', (req, res) => {
    res.send('Okay');
});

const server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log(checklist.print('OK', `NEMO Express server ${termColor.paint('LISTENING', 'blue')} on port ${termColor.paint(app.get('port'), 'blue')}`));
});