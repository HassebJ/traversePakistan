var express = require('express');
var compression = require('compression');
/*var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');*/
var bodyParser = require('body-parser');
/*var methodOverride = require('method-override');
var csrf = require('csurf');
var multer = require('multer');
var swig = require('swig');*/

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

};
