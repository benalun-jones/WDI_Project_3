var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
  facebookId: String,
  access_token: String,
  name: String,
  email: String,
  profile_picture: String,
});

module.exports = mongoose.model('User', UserSchema);

