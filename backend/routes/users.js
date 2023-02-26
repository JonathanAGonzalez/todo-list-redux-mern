var express = require('express');
var router = express.Router();
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

router.get('/', getUsers);
router.post('/create', createUser);
router.put('/update/:id', updateUser);
router.delete('/remove/:id', deleteUser);

module.exports = router;
