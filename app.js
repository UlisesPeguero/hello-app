const express = require('express');
const app = express();
const mongoose = require('mongoose');
// Constant with the port the server will run on
const PORT = 3030;
// MongoDB connection string
// in this case is a local instance of mongoDB with no security
// replace with your connection to your mongoDB here
const MONGODB_CONNECTION = 'mongodb://localhost:27017/foo';

// attemps to connect to the database
mongoose.connect(MONGODB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// we get the object of the connection from mongoose
const db = mongoose.connection;
/*  attach a function to the event 'error' in the connection
    whenever there is an error it will print in the console
    this could also be wrote like:

    db.on('error', function(error) {
        console.log(error);
    });
*/
db.on('error', error => console.log(error));
// attach a funtion to the event 'open', [once] means that will be executed once
db.once('open', () => console.log('Connected to localhost:27017'));

// Tells the server to treat all the data exchanged as json objects
app.use(express.json());

// We get the Router that will handle any endpoint that starts with /phrases
const phrasesRouter = require('./routes/phrases');
// we specified that the router is for /phrases
app.use('/phrases', phrasesRouter);

// Start the express server on PORT
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});