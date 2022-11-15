const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, todoController.todoGet)
router.post('/createTodo', todoController.createTodo)
router.put('/markCompleted', todoController.markCompleted)
router.put('/markIncompleted', todoController.markIncompleted)
router.delete('/deleteTodo', todoController.deleteTodo)

module.exports = router