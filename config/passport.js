'use strict';

var passport= require('passport'),
	User = require('mongoose').model('User'),
	path = require('path'),
	utilities = require('./utilities');


module.exports = function() {
	// Serialize sessions
	passport.serializeUser(function(user, done) {
        console.log("Serialized User: " + user.id);
		done(null, user.id);
	});

	// Deserialize sessions
	passport.deserializeUser(function(id,done ) {
		console.log("Deserializing user with id : " +id );
		User.findById(id, function(error, user){
			done(error, user);
		})
	});

	// Initialize strategies
	utilities.walk('./config/strategies').forEach(function(strategyPath) {
		require(path.resolve(strategyPath))();
	});

};