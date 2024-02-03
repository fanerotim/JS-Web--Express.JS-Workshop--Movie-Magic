const express = require('express');
let handlebars = require('express-handlebars');
let path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

mongoose.connect('mongodb://127.0.0.1:27017/magic_movie')
    .then(() => console.log('Database connected'))


let port = 6969;

let app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

let router = require('./routes/routes');

app.use(router);
app.use('/static', express.static('src/static'));
app.use(cookieParser());

// handles 404 error
app.get('*', (req, res) => {
    res.status(404).render('404', {layout: false})
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
