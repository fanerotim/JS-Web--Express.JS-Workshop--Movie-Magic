exports.auth = (req, res, next) => {
    let token = req.headers.cookie;

    if (token) {
        res.locals.token = true;
    }

    next();
}

exports.isAuthenticated = (req, res) => {
    let token = req.cookies;

    if (!token.auth) {
        res.status(402).send('Unauthorized')
    }
}

