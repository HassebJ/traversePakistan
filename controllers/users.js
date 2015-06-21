/**
 * Created by mac on 5/2/15.
 */

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    passport = require('passport'),
    User = mongoose.model('User'),
//    Role = mongoose.model('Role'),
    _ = require('lodash');

/**
 * Get the error message from error object
 */
var getErrorMessage = function(err) {
    var message = '';

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    } else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }

    return message;
};


exports.signup = function(req, res) {

    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.username = req.body.username;

    // Add missing user fields
    user.displayName = user.firstName + ' ' + user.lastName;
    console.log("insisde sign up " + req.body.username);

    user.save(function(err) {
        if (err) {
            console.log(err);
            return res.send(400, {
                message: getErrorMessage(err)
            });
        } else {
            // Remove sensitive data before login
            user.password = undefined;
            user.salt = undefined;
            user.__v = undefined;
            // user.permissions = undefined;

            req.login(user, function(err) {
                if (err) {
                    console.log(err);
                    res.send(400, err);
                } else {
                    res.json(user);
                }
            });
        }
    });
};

/**
 * Signin with using passport authentication module
 * @url /users/signin
 * @method POST
 */

exports.signin = function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err){
            return res.send(500, {
                message: 'An internal server error occur ' + info
            });
        }
        if (!user){
            return res.send(204, {
                message: 'No user found'
            });
        }else {
            // Remove sensitive data before login
            user.password = undefined;
            user.salt = undefined;
            user.__v = undefined;
            // user.permissions = undefined;
            req.login(user, function(err) {
                if (err) {
                    return res.send(400, err);
                } else {

                    res.json(user);

                }
            });
        }
    })(req, res, next);
};

/**
 * Signout user
 * @url /api/v1/users/signout
 * @method POST
 */
exports.signout = function(req, res) {
    req.logout();
    res.send(200);
};