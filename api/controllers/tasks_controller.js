var Task = require('../models/task');

function getAll(req, res) {
  Task.find(req.query, function(err, tasks){
    if (err) return res.status(404).json({ message: 'Something went wrong and we could not pull the tasks.'});
    res.status(200).json(tasks);
  });
};

function createTask(req, res){
  var task = new Task(req.body);
  // task.assigned_user = req.user.id;

  task.save(function(err){
    if(err) return res.render('error', {message: 'Could not create task ' + (err) });
    res.status(201).json({ task: task });
  });
}

function getTask(req, res) {
  var id = req.params.id;

  Task.findById({_id: id}, function(err, task) {
    if(err) return res.json({message: 'Could not find task!' + err});

    res.json({task: task});
  }).select('-__v');
}


function updateTask(req, res){
  Task.findById(req.params.id,  function(err, task) {
    if (err) return res.status(500).json({message: "Something went wrong!"});
    if (!task) return res.status(404).json({message: 'No task found.'});

    task.save(function(err) {
     if (err) return res.status(500).json({message: "Something went wrong!"});

      res.status(201).json({message: 'Task successfully updated.', task: task});
    });
  });
}

function deleteTask(req, res){
  Task.findByIdAndRemove({_id: req.params.id}, function(err){
   if (err) return res.status(404).json({message: 'Something went wrong.'});
   res.status(200).json({message: 'Task has been successfully deleted'});
  });
}

module.exports = {
  getAll: getAll,
  createTask: createTask,
  getTask: getTask,
  updateTask: updateTask,
  deleteTask: deleteTask
}