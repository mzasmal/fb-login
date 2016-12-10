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

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.get('/facebook',
  passport.authenticate('facebook', {scope: ['email']})
);

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }), function(req, res) {
    res.redirect('/');
  }
);



module.exports = router;
