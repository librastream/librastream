let libra = require('libra-grpc');

function decode_hex(arg) {
  return (new Buffer.from(arg, 'base64')).readUInt32LE(0);
}

function decode_int32le(arg) {
  return (new Buffer.from(arg, 'base64')).toString("hex");
}

function decode(result) {
  if (result == undefined)
    return 0;
  let arry_ret = [];
  try {
    let { transactions, infos, events_for_versions, first_transaction_version} = result.txn_list_with_proof;
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
          version = decode_int32le(first_transaction_version.value.toString()),
          raw = {
            bytes: decode_hex(transactions[i].raw_txn_bytes),
            program: decode_hex(program.code)
          },
          sender = {
            signature: decode_hex(transactions[i].sender_signature),
            publicKey: decode_hex(transactions[i].sender_public_key),
            account: decode_hex(senderAccount),
            sequenceNumber: decode_int32le(sequenceNumber.toString())
          },
          hash = {
            signedTransaction: decode_hex(infos[i].signed_transaction_hash),
            stateRoot: decode_hex(infos[i].state_root_hash),
            eventRoot: decode_hex(infos[i].event_root_hash)
          },
          gas = {
            used: decode_int32le(infos[i].gas_used.toString()),
            maxedAmount: decode_int32le(maxGasAmount.toString()),
            unitPrice: decode_int32le(gasUnitPrice.toString())
          };
      let events;
      if (events_for_versions.events_for_versions != null)
        events = decode_hex(events_for_versions.events_for_versions[0].events);
      t_date = expirationTime;

      let rec_new = {version, raw, sender, hash, gas, arguments: program.argumentsList, module, date: t_date};//, events, modules
      arry_ret.push({...rec_new});
    }
  }catch (e) {
    console.log(`error: ${e}`);
  }
  return arry_ret;
}

module.exports = decode;
