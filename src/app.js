const express = require('express');
let handlebars = require('express-handlebars');
let path = require('path');

let port = 6969;

let app = express();


app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

let router = require('./routes/routes');

app.use(router)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
