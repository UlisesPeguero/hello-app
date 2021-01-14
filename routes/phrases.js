const express = require('express');
const router = express.Router();
const Phrase = require('../models/phrase');

router.get('/', async (request, response) => {
    try {
        const phrases = Phrase.find();
        response.json(phrases);
    } catch(error) {
        response.status(500).json({message: error.message});
    }
});

module.exports = router;