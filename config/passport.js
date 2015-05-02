'use strict';

var passport = require('passport'),
	User = require('mongoose').model('User'),
	path = require('path'),
	utilities = require('./utilities');

module.exports = function() {
	// Serialize sessions
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	// Deserialize sessions
	passport.deserializeUser(function(id, done) {
        done(null, id);
	});

	// Initialize strategies
	utilities.walk('./config/strategies').forEach(function(strategyPath) {
		require(path.resolve(strategyPath))();
	});
};