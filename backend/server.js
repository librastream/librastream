require('dotenv').config({ path: '../.env' });
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const express = require('express');
let cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
//const Data = require('./data');
const decode = require('./utils');
const libra = require('libra-grpc');

const http = require('http');
const WebSocket = require('ws');


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
  ws.on('message', (message) => {

    //log the received message and send it back to the client
    ws.send(`Hello, you sent -> ${message}`);

  });

  //send immediatly a feedback to the incoming connection  
  let i = 0;
  setInterval(() => {
    ws.send('Hello, you sent -> i: ' + i);
    i += 1;
  }, 2000);

});

app.use('/api', router);


//start our server
server.listen(process.env.PORT || 8999, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});



if (!process.env.DATABASE) {
  console.log('Please specify a DATABASE uri');
  return;
}
if (!process.env.SERVER_PORT) {
  console.log('Please specify SERVER_PORT');
  return;
}


var libraClient = new libra.Client('ac.testnet.libra.org:8000');




(async () => {
  // Use connect method to connect to the server
  MongoClient.connect(process.env.DATABASE, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    (async () => {
      const collection = client.db("explorer").collection("transactions");
      const txCurrentCollection = await collection.find({}).sort({ "version": -1 }).limit(1).toArray();
      let txCurrent = txCurrentCollection[0] != undefined ? txCurrentCollection[0].version + 1 : 1;

      let txLatest = txCurrent+1;
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
                console.log("adding item: ", txLatest)
                collection.insertMany(arry_decoded)
                .catch(err=>{
                  console.log("couldn't insert to DB")
                });
              }
            }
            
            libraClient.request('get_transactions', params)
              .then((err, result) => {

                // console.log("Libra Endpoint has rate limited us: ")
                if (err) {
                  if (err != undefined && err.txn_list_with_proof != undefined) {
                    insert(err);
                    console.log("error, but we can insert")
                  } else {
                    console.log("Error: txLatest: ", txLatest)
                    console.log(JSON.stringify(err));
                  }
                } else {

                  insert(result);
                  // (async () => {
                  //   for (let elem in arry_decoded) {
                  //     txPrevious = txLatest;
                  //     txLatest = arry_decoded[elem].version;

                  //   }
                  // })();
                }

              })
              .catch(err => {
                console.log("asycn error: ", err)
              });

            //Pull the latest db changes, and broacast to websocket
            resolve(true);
          }, 1190);



        })
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
  return
  let start_version = db.collection("transactions").find({});
  start_version.sort({ "version": -1 }).limit(1).exec((error, document) => {
    console.log(document)
  });


  console.log(a)

  return;

  let params = {
    start_version,
    limit: 2,
    fetch_events: true
  };

  client.request('get_transactions', params, function (err, result) {
    let arry_decoded;
    arry_decoded = decode(result);
    for (let elem in arry_decoded) {
      console.log(arry_decoded[elem]);

      db.collection('transactions').insertOne(arry_decoded[elem], function (err, res) {
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
