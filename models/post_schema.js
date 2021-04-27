var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  message: String,
}, {
  timestamps: { createdAt: true, updatedAt: false}
});

module.exports = PostSchema