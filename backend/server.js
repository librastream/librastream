const mongoose = require('mongoose');
const express = require('express');
let cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');
const decode = require('./utils');

const API_PORT = 3002;
const app = express();
app.use(cors());
const router = express.Router();

const dbRoute = 'mongodb://18.130.169.108:27017/explorer';

mongoose.connect(dbRoute, { useNewUrlParser: true});

let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));

db.on('error', console.error.bind(console, 'MongoDB connection error'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

let libra = require('libra-grpc');

let client = new libra.Client('ac.testnet.libra.org:8000');

let params = {
  start_version: 394104,
  limit: 2,
  fetch_events: true
};

client.request('get_transactions', params, function(err, result) {
  let arry_decoded;
  arry_decoded = decode(result);
  for (let elem in arry_decoded) {
    console.log(arry_decoded[elem]);

    db.collection("transactions").insertOne(arry_decoded[elem], function (err, res) {
      if (err) return err;
      console.log("document inserted");
    })
  }
});

app.use('/api', router);
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
