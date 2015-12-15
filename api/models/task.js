var mongoose = require("mongoose");

var TaskSchema = new mongoose.Schema({
  task_name: String,
  author: String,
  pages: String,
  users_voted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  assigned_user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  notes: String,
});

module.exports = mongoose.model('Task', TaskSchema);