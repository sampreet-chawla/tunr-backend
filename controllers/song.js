const Song = require('../model/song');
const { Router } = require('express');
const manySongs = require('../db/seedData.json');
const router = Router();

//index route
router.get('/', async (req, res) => {
	res.json(await Song.find({}));
});

//create route
router.post('/', async (req, res) => {
	res.json(await Song.create(req.body));
});

//update route
router.put('/:id', async (req, res) => {
	res.json(
		await Song.findByIdAndUpdate(req.params.id, req.body, { new: true })
	);
});

//delete route
router.delete('/:id', async (req, res) => {
	res.json(await Song.findByIdAndRemove(req.params.id));
});

// add and remove fav
router.put('/favorites/:id', async (req, res) => {
	const song = await Song.findById(req.params.id);
	res.json(
		await Song.findByIdAndUpdate(
			req.params.id,
			{ fav: !song.fav },
			{ new: true }
		)
	);
});

//get favorites
router.get('/favorites', async (req, res) => {
	res.json(await Song.find({ fav: true }));
});

// EXPORT ROUTER
module.exports = router;
