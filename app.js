const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3030;

mongoose.connect('mongodb://localhost:27017/foo', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Connected to localhost:27017'));

app.use(express.json());

const phrasesRouter = require('./routes/phrases');
app.use('/phrases', phrasesRouter);

app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
});