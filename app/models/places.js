'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Place = new Schema({
	placeId: {
		type: String,
		unique: true,
	},
	users: [String],
});

module.exports = mongoose.model('Place', Place);
