var mongoose = require('mongoose');

var GroupSchema = mongoose.Schema({
  title: String,
  users: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  admin_user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  // tasks: [Task.schema]
})

module.exports = mongoose.model('Group', GroupSchema);