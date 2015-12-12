var User = require('../models/user');
var request = require('request');
var jwt = require('jsonwebtoken');
// var secret = process.env.PLANNERR_JWT_SECRET;


function facebook(req, res) {
  if(!req.body.access_token) return res.status(401).json({ message: 'No Access Token' });