const express = require('express');
const router = express.Router();
const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/roleMiddleware');

// All routes require authentication
router.use(protect);

// Task routes
router.route('/')
  .get(getTasks)      // GET /api/tasks
  .post(createTask);  // POST /api/tasks

router.route('/:id')
  .get(getTaskById)   // GET /api/tasks/:id
  .put(updateTask)    // PUT /api/tasks/:id
  .delete(admin, deleteTask); // DELETE /api/tasks/:id (Admin only)

module.exports = router;