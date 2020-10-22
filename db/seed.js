const Song = require('../model/song');
const manySongs = require('./seedData.json');
const router = require('express').Router();

router.get('/', async (req, res) => {
	await Song.find({}).deleteMany();
	await Song.insertMany(manySongs).then(
		res.json({ status: 200, data: manySongs })
	);
});

module.exports = router;
