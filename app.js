var express = require('express');
var path = require('path');
var logger = require('morgan');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');

var apisRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(session({secret: 'weather_backend'}));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/api', apisRouter);

module.exports = app;
