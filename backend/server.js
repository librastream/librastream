require('dotenv').config({ path: '../.env' });
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const express = require('express');
const _ = require('lodash');
let cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const decode = require('./utils');
const libra = require('libra-grpc');

const http = require('http');
const WebSocket = require('ws');
let wsConnection;

const app = express();
const router = express.Router();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));


const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  //connection is up, let's add a simple simple event
  console.log('start');
  wsConnection = ws;

  MongoClient.connect(process.env.DATABASE, async function(err, client) {
    const collection = client.db('explorer').collection('transactions');
    const txCurrentCollection = await collection.find({}).sort({ 'version': -1 }).limit(100).toArray();

    wsConnection.send(JSON.stringify({ data: txCurrentCollection, type: 'init' }));
  });
});

app.use('/api', router);

if (!process.env.DATABASE) {
  console.log('Please specify a DATABASE uri');
  return;
}
if (!process.env.SERVER_PORT) {
  console.log('Please specify SERVER_PORT');
  return;
}

//start our server
server.listen(process.env.PORT || 8999, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});

var libraClient = new libra.Client('ac.testnet.libra.org:8000');


app.get('/api/search/:searchWord', (req, res) => {
  let searchWord = req.params.searchWord;
  MongoClient.connect(process.env.DATABASE, async function(err, client) {
    const collection = client.db('explorer').collection('transactions');
    let result = [];
    if (!isNaN(searchWord)) {
      result = await collection.find({ 'version': Number.parseInt(searchWord) }).limit(1).toArray();
    }
    console.log('start');
    if (result[0] !== undefined) {
      console.log('in');
      return res.send({ ...result[0], type: 'version' });
    } else {
      console.log('out');

      result = await collection.find({ 'hash.signedTransaction': searchWord }).toArray();
      if (result[0] !== undefined)
        return res.send({ ...result[0], type: 'tx' });
      return res.send({ 'type': 'address' });
    }
  });
});

app.get('/api/:id', (req, res) => {
  let id = req.params.id;
  // return res.send({ 'search': req.params.searchWord });
  MongoClient.connect(process.env.DATABASE, async function(err, client) {
    const collection = client.db('explorer').collection('transactions');

    const result = await collection.find({ '_id': Number.parseInt(id) }).limit(1).toArray();
    return res.send({ ...result[0] });
  });
});

app.get('/api/address/:searchWord', (req, res) => {
  let searchWord = req.params.searchWord;
  MongoClient.connect(process.env.DATABASE, async function(err, client) {
    const collection = client.db('explorer').collection('transactions');

    let res1 = await collection.find({ 'sender.account': searchWord }).limit(1000).toArray();
    let color='GREEN';
    if (res1.length > 0)
      color = 'RED';
    let res2 = await collection.find({ 'arguments': { 'type': 1, 'data': searchWord } }).toArray();
    const transactions = [...res1, ...res2];
    const lastTxn = _.maxBy(res1, txn => new Date(txn.date).getTime());

    return res.send({
      transactions,
      'type': 'address',
      'total_received': transactions.reduce((sum, tx) => sum + tx.arguments[1].data, 0),
      'final_balance': res1.reduce((sum, tx) => sum + tx.arguments[1].data, 0),
      'sequence': lastTxn ? lastTxn.sender.sequenceNumber : '',
      'color': color
    });
    // }
  });
});

app.get('/api/version/:arg', (req, res) => {
  let arg = req.params.arg;
  MongoClient.connect(process.env.DATABASE, async function(err, client) {
    const collection = client.db('explorer').collection('transactions');
    const result = await collection.find({ 'version': +arg }).limit(1).toArray();
    return res.send({ ...result[0] });
  });
});

app.get('/api/tx/:arg', (req, res) => {
  let arg = req.params.arg;
  // return res.send({ 'search': req.params.searchWord });
  MongoClient.connect(process.env.DATABASE, async function(err, client) {
    const collection = client.db('explorer').collection('transactions');

    const result = await collection.find({ 'hash.signedTransaction': arg }).limit(1).toArray();
    return res.send({ ...result[0] });
  });
});

(async () => {
  // Use connect method to connect to the server
  console.log('Started connection attempts');
  MongoClient.connect(process.env.DATABASE, function(err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    (async () => {
      const collection = client.db('explorer').collection('transactions');
      const txCurrentCollection = await collection.find({}).sort({ 'version': -1 }).limit(1).toArray();
      let txCurrent = txCurrentCollection[0] != undefined ? txCurrentCollection[0].version + 1 : 1;

      let txLatest = txCurrent + 1;
      let txPrevious = 0;

      //minimum interval: 120 or duplicate results
      //here
      let tryAsync = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            let params = {
              start_version: txLatest,
              limit: 1000,
              fetch_events: true
            };
            let insert = (result) => {

              let arry_decoded;
              arry_decoded = decode(result);
              assert(arry_decoded[0] != null);
              txPrevious = txLatest;
              txLatest = arry_decoded[arry_decoded.length - 1].version + 1;


              if (txPrevious == 1 || txLatest > txPrevious) {
                console.log('adding item: ', txLatest);
                if (wsConnection) {
                  wsConnection.send(JSON.stringify({ data: arry_decoded, type: 'new' }));
                }
                collection.insertMany(arry_decoded)
                  .catch(err => {
                    console.log('couldn\'t insert to DB');
                  });
              }
            };

            libraClient.request('get_transactions', params)
              .then((err, result) => {

                // console.log("Libra Endpoint has rate limited us: ")
                if (err) {
                  if (err != undefined && err.txn_list_with_proof != undefined) {
                    insert(err);
                    console.log('error, but we can insert');
                  } else {
                    console.log('Error: txLatest: ', txLatest);
                    console.log(JSON.stringify(err));
                  }
                } else {

                  insert(result);
                  (async () => {
                    for (let elem in arry_decoded) {
                      txPrevious = txLatest;
                      txLatest = arry_decoded[elem].version;

                    }
                  })();
                }

              })
              .catch(err => {
                console.log('async error: ', err);
              });

            //Pull the latest db changes, and broacast to websocket
            resolve(true);
          }, 1190);


        });
      };
      (async () => {

        while (true) {
          await tryAsync();
        }
      })();


      // client.close();


      //params


      ///here
    })();

  });
})();

let updateExplorer = () => {
  return;
  let start_version = db.collection('transactions').find({});
  start_version.sort({ 'version': -1 }).limit(1).exec((error, document) => {
    console.log(document);
  });


  console.log(a);

  return;

  let params = {
    start_version,
    limit: 2,
    fetch_events: true
  };

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
