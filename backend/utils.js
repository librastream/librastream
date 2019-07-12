let libra = require('libra-grpc');

function decode_hex(arg) {
  return (new Buffer.from(arg, 'base64')).toString("hex");
}

function decode_int32le(arg) {
  return (new Buffer.from(arg, 'base64')).readUInt32LE(0);
}

let mongoObjectId = () => {
  var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
    return (Math.random() * 16 | 0).toString(16);
  }).toLowerCase();
};

function decode(result) {
  if (result == undefined)
    return 0;
  let arry_ret = [];
  try {
    let { transactions, infos, events_for_versions, first_transaction_version } = result.txn_list_with_proof;
    for (let i in transactions) {
      let decoded_raw_txn_bytes = libra.utils.deserializeRawTxnBytes(transactions[i].raw_txn_bytes);
      let { senderAccount, sequenceNumber, program, maxGasAmount, gasUnitPrice, expirationTime } = decoded_raw_txn_bytes;

      program.argumentsList.forEach((item, idx) => {
        if (item.type == 0) {
          program.argumentsList[idx].data = decode_int32le(item.data);
        } else if (item.type == 1)
          program.argumentsList[idx].data = decode_hex(item.data);
      });

      let
        version = parseInt(first_transaction_version.value) + Number(i),
        raw = {
          bytes: decode_hex(transactions[i].raw_txn_bytes),
          program: decode_hex(program.code)
        },
        sender = {
          signature: decode_hex(transactions[i].sender_signature),
          publicKey: decode_hex(transactions[i].sender_public_key),
          account: decode_hex(senderAccount),
          sequenceNumber: sequenceNumber
        },
        hash = {
          signedTransaction: decode_hex(infos[i].signed_transaction_hash),
          stateRoot: decode_hex(infos[i].state_root_hash),
          eventRoot: decode_hex(infos[i].event_root_hash)
        },
        gas = {
          used: infos[i].gas_used,
          maxedAmount: maxGasAmount,
          unitPrice: gasUnitPrice
        },
        t_date;
      try {
        t_date = new Date(expirationTime * 1000).toISOString();
      } catch (err) {
        t_date = new Date(0).toISOString();
        console.log("time issue logging, version: ", version)

      }
      let module = program.modulesList;

      let events;
      if (events_for_versions.events_for_version != null) {
        events = events_for_versions.events_for_version[0].events[i]
        if (events != undefined) {
          events = {
            ...events,
            access_path: {
              address: decode_hex(events.access_path.address),
              path: decode_hex(events.access_path.path)
            },
            event_data: decode_hex(events.event_data)
          }
        } else {
          events = []
        }

      }

      let rec_new = { _id: version, date: t_date, version, raw, sender, hash, gas, arguments: program.argumentsList, module, events };//, events, modules
      arry_ret.push({ ...rec_new });
    }
  } catch (e) {
    console.log(`error: ${e}`);
  }
  return arry_ret;
}

module.exports = decode;
