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
  statest = '';
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

// initial entry point on `Address Overview`
app.get('/api/address/:searchWord/:pageSize', (req, res) => {
  // arguments
  let
    searchWord = req.params.searchWord,
    pageSize = Number.parseInt(req.params.pageSize);

  // mongo db queries
  MongoClient.connect(process.env.DATABASE, async function(err, client) {
    const collection = client.db('explorer').collection('transactions');
    let total_num = await collection.aggregate([
      {
        $match: {
          $or: [
            { 'sender.account': searchWord },
            { 'arguments.0.data': searchWord }
          ]
        }
      }, {
        $project: { 'arguments': 1 }
      }, {
        $addFields: {
          argument1Data: {
            $arrayElemAt: ['$arguments', 1]
          }
        }
      }, {
        $group: {
          _id: null,
          sum: {
            $sum: '$argument1Data.data'
          },
          count: {
            $sum: 1
          }
        }
      }]).toArray();
    let total_array = await collection.aggregate([
      {
        $match: {
          $or: [
            { 'sender.account': searchWord },
            { 'arguments.0.data': searchWord }
          ]
        }
      }, {
        $sort: { 'date': -1 }
      }, {
        $limit: pageSize
      }]).toArray();
    let sender_num = await collection.aggregate([
      {
        $match: {
          'sender.account': searchWord
        }
      }, {
        $project: { 'arguments': 1 }
      }, {
        $addFields: {
          argument1Data: {
            $arrayElemAt: ['$arguments', 1]
          }
        }
      }, {
        $group: {
          _id: null,
          sum: {
            $sum: '$argument1Data.data'
          }
        }
      }]).toArray();

    let color = 'GREEN';

    // return values
    let
      total_count = (total_num[0] === undefined) ? 0 : total_num[0].count,
      total_sum = (total_num[0] === undefined) ? 0 : total_num[0].sum,
      sender_sum = (sender_num[0] === undefined) ? 0 : sender_num[0].sum,
      sequence_num = (total_array.length === 0) ? '' : total_array[0].sender.sequenceNumber;

    // response
    return res.send({
      total_array,
      'transactions_length': total_count,
      'type': 'address',
      'total_received': total_sum,
      'final_balance': sender_sum,
      'sequence': sequence_num
      // 'color': color,
    });
  });
});

// pagination entry point on `Address Overview`
app.get('/api/address/:searchWord/:pageSize/:currentPage', (req, res) => {
  // arguments
  let
    searchWord = req.params.searchWord,
    pageSize = Number.parseInt(req.params.pageSize),
    currentPage = Number.parseInt(req.params.currentPage);

  // constants
  const skip_num = pageSize * (currentPage - 1);

  //db queries
  MongoClient.connect(process.env.DATABASE, async function(err, client) {
    const collection = client.db('explorer').collection('transactions');
    let txn_array = await collection.find(
      {
        $or: [
          { 'sender.account': searchWord },
          { 'arguments.0.data': searchWord }
        ]
      }).sort({ 'date': -1 }).skip(skip_num).limit(pageSize).toArray();
    let total_count = await collection.aggregate(
      {
        $match: {
          $or: [
            { 'sender.account': searchWord },
            { 'arguments.0.data': searchWord }
          ]
        }
      }, {
        $group: {
          '_id': null,
          'count': { $sum: 1 }
        }
      }).toArray();

    // let color='GREEN';

    // retrn values
    const total_len = (total_count[0] === undefined) ? 0 : total_count[0].count;

    //response
    return res.send({
      type: 'pagination',
      txn_array,
      total_len,
      // color: 'color'
    });
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

        // while (true) {
        //   await tryAsync();
        // }
      })();


      // client.close();


      //params


      ///here
    })();

  });
})();
