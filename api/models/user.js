var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
  facebook_id: String,
  access_token: String,
  first_name: String,
  last_name: String,
  email: String,
  profile_picture: String,
});

module.exports = mongoose.model('User', UserSchema);

