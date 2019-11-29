'use strict';

const mongoose = require('mongoose');

const categories = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
});

module.exports = mongoose.model('categories ', categories);
