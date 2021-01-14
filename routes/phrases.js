const express = require('express');
const router = express.Router();
const Phrase = require('../models/phrase');

router.get('/', async (request, response) => {
    try {
        const phrases = await Phrase.find();
        console.log(phrases);
        response.json(phrases);
    } catch(error) {
        console.log(error);
        response.status(500).json({message: error.message});
    }
});

module.exports = router;