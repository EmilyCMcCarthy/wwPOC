const express = require('express');
const morgan = require('morgan');
const app = express(); // creates an instance of an express application
const port = 3000;

app.use(morgan('combined'));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))