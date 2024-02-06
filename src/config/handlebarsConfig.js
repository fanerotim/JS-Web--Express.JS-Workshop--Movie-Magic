let handlebars = require('express-handlebars');
const express = require('express');
const path = require('path');


const handlebarsConfig = (app) => {

    app.engine('hbs', handlebars.engine({
        extname: 'hbs'
    }))
    
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '../views'));

    app.use('/static', express.static('src/static'));
    return app;
}

module.exports = handlebarsConfig;