var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config');
var mongoose = require('mongoose');
var app = express();

mongoose.connect(config.database, function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log("Connected to the database");
	}
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

//Running the API
var api = require('./app/routes/api')(app, express);
app.use('/api', api);

//Running the server
app.listen(config.port, function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log("Listening on port 3000");
	}
});