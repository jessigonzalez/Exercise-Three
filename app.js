const express = require('express')
const app = express();
const port = 4000;

const indexRoute = require('./routes/index.js')
const aboutRoute = require('./routes/about.js')


app.use('/', indexRoute);
app.use('/about', aboutRoute);
/* how a request works^ */

//--serve static img
app.use('/static', express.static('public'));

console.log("The App is listening")
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
