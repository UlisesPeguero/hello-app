const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    phrase: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Phrase', schema);
