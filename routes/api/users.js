const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addReaction,
  removeReaction,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/students/:studentId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/students/:studentId/assignments
router.route('/:studentId/thoughts').post(addReaction);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:studentId/thoughts/:thoughtId').delete(removeReaction);

module.exports = router;
