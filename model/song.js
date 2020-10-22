const mongoose = require('../db/conn');
const { Schema, model } = require('mongoose');

//Song SCHEMA
const songSchema = new Schema(
	{
		title: { type: String, required: true },
		artist: { type: String, required: true },
		time: { type: String, required: true },
		fav: { type: Boolean, default: false, required: false },
	},
	{ timestamps: true }
);

//Song MODEL
const Song = mongoose.model('Song', songSchema);

//EXPORT MODEL
module.exports = Song;
