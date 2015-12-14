var express    = require('express');
var morgan     = require('morgan');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var jwt        = require('jsonwebtoken');
var path       = require('path');
var cors       = require('cors');
var methodOverride = require("method-override");
var app = express();
var request = require('request-promise');
var qs = require('qs');

mongoose.connect('mongodb://localhost:27017/mindmerge');

var config = require('./config');
var routes = require('./config/routes');

var User = require('./models/user');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: config.appUrl,
  credentials: true
}));
app.use(routes);

// After the user logs in with facebook, facebook's server will send a request to this endpoint
// with a code and a client id, which we will use to get an access token
app.post('/auth/facebook', function(req, res) {
  var params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: process.env.MINDMERGE_FACEBOOK_API_SECRET,
    redirect_uri: config.appUrl + "/"
  };

  // step 1, we make a request to facebook for an access token
  request.get({ url: config.oauth.facebook.accessTokenUrl, qs: params, json: true })
    .then(function(accessToken) {
      // step 2, we use the access token to get the user's profile data from facebook's api
      return request.get({ url: config.oauth.facebook.profileUrl, qs: accessToken, json: true });
    })
    .then(function(profile) {
      // step 3, we try to find a user in our database by their email
      return User.findOne({ email: profile.email })
        .then(function(user) {
          // if we find the user, we set their facebookId and picture to their profile data
          if(user) {
            user.facebookId = profile.id;
            user.profile_picture = user.profile_picture || profile.profile_picture.data.url;
          }
          else {
            // otherwise, we create a new user record with the user's profile data from facebook
            user = new User({
              facebookId: profile.id,
              name: profile.name,
              profile_picture: profile.profile_picture.data.url,
              email: profile.email
            });
          }
          // either way, we save the user record
          return user.save();
        })
      })
      .then(function(user) {
        // step 4, we create a JWT and send it back to our angular app
        var token = jwt.sign(user, config.secret, { expiresIn: '24h' });
        return res.send({ token: token });
      })
      .catch(function(err) {
        console.log(err);
        // we handle any errors here
        return res.status(500).json({ error: err });
      });
});

app.get('/', function(req, res){
  res.send('hello world from express');
});

app.listen(config.port);
console.log("Express is listening on port " + config.port);
