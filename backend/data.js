const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
      version: String,
      raw: Object,
      sender: Object,
      hash: Object,
      gas: Object,
      arguments: Array,
      module: Object,
      date: Number

  }
);

module.exports = mongoose.model('Data', DataSchema);
