require('dotenv').config();
const { MONGODBURI } = process.env;
const mongoose = require('mongoose');
const config = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useFindAndModify: false,
};
const db = mongoose.connection;

mongoose.connect(MONGODBURI, config);

db.on('open', () => console.log('You are connected to Mongo'))
	.on('close', () => console.log('You are disconnected from Mongo'))
	.on('error', (err) => console.log(err));

module.exports = mongoose;
