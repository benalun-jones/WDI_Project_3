var mongoose = require('mongoose');
var Task = require('./task');

var GroupSchema = mongoose.Schema({
  title: String,
  users: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  admin_user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  picture: String,
})

module.exports = mongoose.model('Group', GroupSchema);