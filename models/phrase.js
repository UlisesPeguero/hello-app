const mongoose = require('mongoose');

// we create a Schema instance
// the parameter we send is a  json object of the schema of our collection (Phrases)
const schema = new mongoose.Schema({
    // phrase is the name of the field or object attribute
    phrase: {
        // this is the type we want mongoose to treat the variable as
        type: String,
        // this makes it that we are always required to have a value in the field phrase
        required: true
    }
});

// we export the mongoose model of this schema as Phrase
module.exports = mongoose.model('Phrase', schema);
