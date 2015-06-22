var compression = require('compression');
var bodyParser = require('body-parser');
require('./passport');
var config = require('./constants'),
    path = require('path')


var utilities = require('./utilities');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var session = require('express-session');
var passport = require('passport');

module.exports = function( app ) {
    //Compresses the document
    app.use ( compression({
        threshold :512
    }));
   /* // Static files middleware
     app.use(express.static(config.root + '/public'));
     */

    // bodyParser should be above methodOverride
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(cookieParser(config.sessionSecret));
    app.use(cookieSession({secret : config.sessionSecret, cookie :{maxAge :1}}));

    app.use(session({
        secret  : config.sessionSecret,
        proxy : true,
        resave : true,
        saveUninitialized : true,
        cookie: {
            maxAge  : 360*5//10800 * 1000//3 Hour
            // expires : new Date(Date.now() + 300000) //1 Hour
        }
    }));
    // use passport session
    app.use(passport.initialize());
    app.use(passport.session());

    utilities.walk('./routes/').forEach(function(routePath) {
        require(path.resolve(routePath))(app);
    });

    //For error Handling, always keep in the end

    /**
     * Error handling
     */

//    app.use(function (err, req, res, next) {
//        // treat as 404
//        if (err.message
//            && (~err.message.indexOf('not found')
//                || (~err.message.indexOf('Cast to ObjectId failed')))) {
//            return next();
//        }
//        console.error(err.stack);
//        // error page
//        res.status(500);
//        res.send({
//            "status" : "error",
//            "result" : err.message
//        });
//    });
//
//    // assume 404 since no middleware responded
//    app.use(function (req, res, next) {
//        res.status(404).send({
//            "status" : "error",
//            "result" : "404"
//        });
//    });
};
