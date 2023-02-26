const Task = require('../models/Task.model');

const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    const taskSaved = await task.save();
    res.status(200).json(taskSaved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });

    if (task) {
      task.title = req.body.title;
      task.description = req.body.description;
      await task.save();

      res.status(200).json(task);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id });
    if (task) {
      res.status(200).json({ message: 'task deleted successfully', task });
    } else {
      res.status(404).json({ message: 'task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTask,
  createTask,
  updateTask,
  deleteTask,
};
