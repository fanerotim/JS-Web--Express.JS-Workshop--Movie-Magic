const express = require('express');
let port = 6969;

let app = express();

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
