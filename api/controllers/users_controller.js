var User = require('../models/user');
var Group = require('../models/group');

function getAll(req, res) {
  User.find(function(err, users) {
    if(err) return res.json({message: 'computer says no'});

    res.json({users: users});
  }).select('-__v');
}

function createUser(req, res) {

  var user = new User(req.body);

  user.save(function(err) {
    if(err) return res.json({messsage: 'Could not create user!' + err});

    res.json({user: user});
  });
}

function getUser(req, res) {
  var id = req.params.id;

  User.findById({_id: id}, function(err, user) {
    if(err) return res.json({message: 'Could not find user!' + err});

    res.json({user: user});
  }).select('-__v');
}

function updateUser(req, res){
  User.findById(req.params.id,  function(err, user) {
    if (err) return res.status(500).json({message: "Something went wrong!"});
    if (!user) return res.status(404).json({message: 'No user found.'});

    if (req.body.groups) user.groups = req.body.groups;

    user.save(function(err) {
     if (err) return res.status(500).json({message: "Something went wrong!"});

     res.status(201).json({message: 'User successfully updated.', user: user});
   });
  });
}

function deleteUser(req, res){
  User.findByIdAndRemove({_id: req.params.id}, function(err){
   if (err) return res.status(404).json({message: 'Something went wrong.'});
   res.status(200).json({message: 'User has been successfully deleted'});
 });
}


module.exports = {
  getAll: getAll,
  createUser: createUser,
  getUser: getUser,
  updateUser: updateUser,
  deleteUser: deleteUser
}

