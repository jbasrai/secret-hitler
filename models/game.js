const mongoose = require('mongoose'),
	{Schema} = mongoose,
	Game = new Schema({
		uid: String,
		date: Date,
		players: [{
			username: String,
			role: String
		}],
		logs: [{
			// election
			presidentId: Number,
			chancellorId: Number,
			votes: Array, // [Boolean]

			// policy enaction
			presidentHand: {
				reds: Number,
				blues: Number
			},
			chancellorHand: {
				reds: Number,
				blues: Number
			},
			enactedPolicy: String,

			// actions
			investigation: Number,
			specialElection: Number,
			execution: Number
		}]
	});

module.exports = mongoose.model('Game', Game);