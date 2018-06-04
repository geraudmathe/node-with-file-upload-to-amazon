const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
  title: String,
  url: String,
  fileMetadata: Object
});

module.exports = mongoose.model('Picture', pictureSchema);
