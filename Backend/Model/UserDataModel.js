// models/Store.js

// const mongoose = require('mongoose');
import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the schema
const userdatamodel = new Schema({
  name: {
    type: String,
    required: true,
  },
  last: {
    type: Number,
    required: true,
  },
  buy: {
    type: Number,
    required: true,
  },
  sell: {
    type: Number,
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
  base_unit: {
    type: Number,
    required: true,
  }
});

// Create the model
const Ticker  = mongoose.model('Store', userdatamodel);

// module.exports = Ticker ;
export default Ticker
