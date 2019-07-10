require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const express = require('express');
let cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');
const decode = require('./utils');
const libra = require('libra-grpc');


const app = express();
app.use(cors());
const router = express.Router();

if (!process.env.DATABASE) {
  console.log('Please specify a DATABASE uri');
  return;
}
if (!process.env.SERVER_PORT) {
  console.log('Please specify SERVER_PORT');
  return;
}

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));


const client = new libra.Client('ac.testnet.libra.org:8000');

let params = {
  start_version: 394104,
  limit: 2,
  fetch_events: true
};

let updateExplorer = () => {
  client.request('get_transactions', params, function(err, result) {
    let arry_decoded;
    arry_decoded = decode(result);
    for (let elem in arry_decoded) {
      console.log(arry_decoded[elem]);

      db.collection('transactions').insertOne(arry_decoded[elem], function(err, res) {
        if (err) {
          console.log('failed to insert recordr: ', err);
          return err;
        }
        console.log('document inserted');
      });
    }
  });
};

updateExplorer();
app.use('/api', router);
app.listen(process.env.SERVER_PORT, () => console.log(`LISTENING ON PORT ${process.env.SERVER_PORT}`));
