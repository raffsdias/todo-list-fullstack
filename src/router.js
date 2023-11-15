const express = require('express');
const tasksController = require('./controllers/tasksControllers');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id', tasksMiddleware.validateFieldStatus, tasksMiddleware.validateFieldTitle, tasksController.uptadeTask);

module.exports = router;