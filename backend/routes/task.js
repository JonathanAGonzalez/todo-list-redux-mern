var express = require('express');
var router = express.Router();
const {
  getAllTask,
  createTask,
  deleteTask,
  updateTask,
} = require('../controllers/tasks.controller');

router.get('/get-all', getAllTask);
router.post('/create', createTask);
router.put('/update/:id', updateTask);
router.delete('/remove/:id', deleteTask);

module.exports = router;
