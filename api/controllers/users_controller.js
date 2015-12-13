var User = require('../models/user');
var Group = require('../models/group');

// GET
function getAll(req, res) {
  User.find(function(err, users) {
    if(error) return response.json({message: 'computer says no'});

    response.json({users: users});
  }).select('-__v');
}

// POST
function createUser(req, res) {
  console.log('body:',req.body);

  var user = new User(req.body);

  user.save(function(err) {
    if(err) return response.json({messsage: 'Could not create user!' + error});

    response.json({user: user});
  });
}

// GET
function getUser(req, res) {
  var id = req.params.id;

  User.findById({_id: id}, function(err, user) {
    if(err) return response.json({message: 'Could not find user!' + error});

    response.json({user: user});
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createUser: createUser,
  getUser: getUser
}

// function usersIndex(req, res){
//   User.find(function(err, users){
//     if (err) return res.status(404).json({message: 'computer says no'});
//     res.status(200).json({ users: users });
//   });
// };
// function usersShow(req, res){
//   User.findById(req.params.id, function(err, user){
//     if (err) return res.status(404).json({message: 'Something went wrong.'});
//     Group.find({ users: [req.params.id] }).populate('admin_user', 'first_name last_name').select('-users').exec(function(err, groups) {
//       if (err) return res.status(404).json({message: 'Something went wrong.'});
//       res.status(200).json({ user: user, groups: groups });
//     });
//   });
// }

// function usersUpdate(req, res){
//   User.findById(req.params.id,  function(err, user) {
//     if (err) return res.status(500).json({message: "Something went wrong!"});
//     if (!user) return res.status(404).json({message: 'No user found.'});

//     if (req.body.groups) user.groups = req.body.groups;

//     user.save(function(err) {
//      if (err) return res.status(500).json({message: "Something went wrong!"});

//       res.status(201).json({message: 'User successfully updated.', user: user});
//     });
//   });
// }

// function usersDelete(req, res){
//   User.findByIdAndRemove({_id: req.params.id}, function(err){
//    if (err) return res.status(404).json({message: 'Something went wrong.'});
//    res.status(200).json({message: 'User has been successfully deleted'});
//   });
// }

// module.exports = {
//   usersIndex:  usersIndex,
//   usersShow:   usersShow,
//   usersUpdate: usersUpdate,
//   usersDelete: usersDelete
// }