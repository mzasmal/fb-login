var express           = require('express');
var path              = require('path');
var favicon           = require('serve-favicon');
var logger            = require('morgan');
var cookieParser      = require('cookie-parser');
var session           = require('express-session');
var passport          = require('passport');
var Strategy          = require('passport-facebook').Strategy;
var expressValidator  = require('express-validator');
var bodyParser        = require('body-parser');
var flash             = require('connect-flash');
var mongo             = require('mongodb');
var mongoose          = require('mongoose');
var db                = mongoose.connection;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: req.user });
});

router.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(), function(req, res) {
    res.render('profile', { user: req.user });
  }
);

module.exports = router;
