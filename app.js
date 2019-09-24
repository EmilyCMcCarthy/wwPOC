const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const port = 3000;
const helmet = require('helmet');
awsController = require(path.join(__dirname, './controllers/awsController.js'));

app.use(helmet());
app.use(morgan('COMBINED'));

const router = express.Router();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.get('/cookies', function(req, res, next) {
  for(var cookieId in signedCookies) {
    res.cookie(cookieId, signedCookies[cookieId]);
   }
   res.end();
});
app.get('/index', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
