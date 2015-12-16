var Group = require('../models/group');

function getAll(req, res) {
  Group.find(function(err, groups){
    if (err) return res.status(404).json({ message: 'Something went wrong and we could not pull the groups.'});
    res.status(200).json(groups);
  });
};

function createGroup(req, res){
  var group = new Group(req.body);
  // group.admin_user = req.user.id;

  group.save(function(err){
    if(err) return res.render('error', {message: 'Could not create group ' + (err) });
    res.status(201).json({ group: group});
  });
}

function getGroup(req, res) {
  var id = req.params.id;

  Group.findById({_id: id}, function(err, group) {
    if(err) return res.json({message: 'Could not find group!' + err});

    res.json({group: group});
  }).select('-__v');

}

function updateGroup(req, res){
  Group.findById(req.params.id,  function(err, group) {
    if (err) return res.status(500).json({message: "Something went wrong!"});
    if (!group) return res.status(404).json({message: 'No group found.'});

    if (req.body.title) group.title = req.body.title;
    if (req.body.users) group.users = req.body.users;
    if (req.body.admin_user) group.admin_user = req.body.admin_user;

    group.save(function(err, group) {
      console.log(err);
      if (err) return res.status(500).json({message: "Something went wrong!"});

      res.status(201).json({message: 'Group successfully updated.', group: group});
    });
  });
}

function deleteGroup(req, res){
  Group.findByIdAndRemove({_id: req.params.id}, function(err){
   if (err) return res.status(404).json({message: 'Something went wrong.'});
   res.status(200).json({message: 'Group has been successfully deleted'});
 });
}

module.exports = {
  getAll:  getAll,
  createGroup: createGroup,
  getGroup: getGroup,
  updateGroup: updateGroup,
  deleteGroup: deleteGroup
}