const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    version: Number,
    raw: Object,
    sender: Object,
    hash: Object,
    gas: Object,
    arguments: Array,
    module: Object,
    date: Date

  }
);

module.exports = mongoose.model('Data', DataSchema);
