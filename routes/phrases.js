const express = require('express');
// we get a router from express
const router = express.Router();
// we get our mongoose model from the mongo database
const Phrase = require('../models/phrase');

// This router will handle /phrases
// any route we define here will come after /phrases

// Tells the server what to do with requests on /phrases or /phrases/
// async specifies that the function is asynchronous
router.get('/', async (request, response) => {
    // try-catch works by attempting to execute all the code in the try{} block
    // if at any time there is an execution error it jumps to execute the cath(error) function
    // error is a parameter given by the language that specifies the error
    try {
        // Phrase.find() gets a list of the collection, in this case Phrases
        // await in an asynchronous function makes the language to stop executing until we get the ok
        // from Phrase.find(),once Phrase.find() is done the execution will continue to the next line
        const phrases = await Phrase.find();

        console.log(phrases);
        // the object response controls what you get back on the browser screen
        // in this case we makes it write a json object with the data we got from 
        // Phrase.find();
        response.json(phrases);
    } catch(error) {
        console.log(error);
        // if there was an error we set the status of the response to 500
        // and we sent a json object with the error message
        response.status(500).json({message: error.message});
    }
});

// this makes it so we can do require('routes/phrases.js') and we can use the router
module.exports = router;