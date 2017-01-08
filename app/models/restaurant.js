var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RestaurantSchema = new Schema({

	id: { type: String, required: true, index: { unique: true}},
	rating: Number,
	name: { type: String, required: true},
	site: String,
	email: String,
	phone: String,
	street: String,
	city: String,
	state: String,
	lat: String,
	lng: String
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
