const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

require('dotenv').config();

const controller = require('./controller');

const app = express();
const port = 4040;

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db);
}).catch(error => console.log('this is error', error));



app.listen(port, () => {
  console.log('listening on port', port);
});