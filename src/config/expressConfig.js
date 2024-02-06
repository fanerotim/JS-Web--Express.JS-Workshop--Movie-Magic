const express = require('express');
let path = require('path');
const cookieParser = require('cookie-parser');

const auth = require('../middlewares/authMiddleware');

const expressConfig = (app) => {
    app.use(cookieParser());
    app.use(auth)
    app.use(express.urlencoded({extended: false}))

    return app;
}

module.exports = expressConfig;