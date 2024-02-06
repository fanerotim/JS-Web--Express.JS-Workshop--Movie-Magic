const express = require('express');
const mongoose = require('mongoose');
let router = require('./routes/routes');

const expressConfig = require('../src/config/expressConfig');
const handlebarsConfig = require('../src/config/handlebarsConfig');

const app = express();
let port = 6969;

expressConfig(app);
handlebarsConfig(app);

app.use(router);

mongoose.connect('mongodb://127.0.0.1:27017/magic_movie')
    .then(() => console.log('Database connected'))

// handles 404 error
app.get('*', (req, res) => {
    res.status(404).render('404')
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})


