///////////////////////////
// Environmental Variables
///////////////////////////
require('dotenv').config();
const { PORT = 4500, NODE_ENV = 'development' } = process.env;

//MONGO CONNECTION

//CORS
const cors = require('cors');

//Bringing in Express
const express = require('express');
const app = express();

//OTHER IMPORTS
const morgan = require('morgan');
const songRouter = require('./controllers/song');
const seedRouter = require('./db/seed');
////////////
//MIDDLEWARE
////////////

app.use(cors());
app.use(express.json());
app.use(morgan('tiny')); //logging

///////////////
//Routes and Routers
//////////////

//Default Route for testing server is working
app.get('/', (req, res) => {
	res.json({ hello: 'Welcome to Tunr Backend!' });
});

// Custom routes
app.use('/songs', songRouter);
app.use('/seed', seedRouter);
//LISTENER
app.listen(PORT, () => {
	console.log(`Your are listening on port ${PORT}`);
});
