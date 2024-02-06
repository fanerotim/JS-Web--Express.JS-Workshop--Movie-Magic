const auth = (req, res, next) => {
    let token = req.headers.cookie;

    if (token) {
        res.locals.token = true;
    }

    next();
}

module.exports = auth;