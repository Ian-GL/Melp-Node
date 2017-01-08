var Restaurant = require('../models/restaurant');

var config = require('../../config');

var secretKey = config.secretKey;


module.exports = function(app, express) {

	var api = express.Router();

	//Create restaurant
	api.post('/restaurants', function(req, res){

		var restaurant = new Restaurant({

			id : req.body.id,
			rating : req.body.rating,
			name : req.body.name,
			site : req.body.site,
			email : req.body.email,
			phone : req.body.phone,
			street : req.body.street,
			city : req.body.city,
			state : req.body.state,
			lat : req.body.lat,
			lng : req.body.lng
		});

		restaurant.save(function(err) {
			if(err) {
				res.send(err);
				return;
			}

			res.json({ message: "A new restaurant has been created"});
		});
	});

	//Read all restaurants
	api.get('/restaurants', function(req,res) {

		Restaurant.find({}, function(err, restaurants) {
			if(err) {
				res.send(err);
				return;
			}
			
			res.json(restaurants);
		});
	});

	//Read one restaurant
	api.get('/restaurants/:id', function(req, res) {
		
		Restaurant.findOne({ "id" : req.params.id }, function(err, restaurant) {
			if(err) {
				res.send(err);
				return;
			}
			
			res.json(restaurant);
		});
	});

	//Update one restaurant
	api.put('/restaurants/:id', function(req, res) {
		
		Restaurant.findOneAndUpdate({ "id" : req.params.id }, {

			"rating" : req.body.rating,
			"name" : req.body.name,
			"site" : req.body.site,
			"email" : req.body.email,
			"phone" : req.body.phone,
			"street" : req.body.street,
			"city" : req.body.city,
			"state" : req.body.state,
			"lat" : req.body.lat,
			"lng" : req.body.lng
		},
		{new: true}, function(err, restaurant) {
			if(err) {
				res.send(err);
				return;
			}
				res.json(restaurant);
		});
	});

	//Delete one restaurant
	api.delete('/restaurants/:id', function(req, res) {
		
		Restaurant.findOneAndRemove({ "id" : req.params.id }, function(err, restaurant) {
			if(err) {
				res.send(err);
				return;
			}
			
			res.send("The restaurant has been deleted from the database");
		});
	});

	return api;

}
