const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo')

router.get('/', todoController.todoGet)
router.post('/createTodo', todoController.createTodo)
router.put('/markCompleted', todoController.markCompleted)
router.put('/markIncompleted', todoController.markIncompleted)
router.delete('/deleteTodo', todoController.deleteTodo)

module.exports = router