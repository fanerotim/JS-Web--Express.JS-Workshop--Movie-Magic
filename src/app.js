const express = require('express');
let port = 6969;

let app = express();

let router = require('./routes/routes');

app.use(router)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
