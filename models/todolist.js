const mongoose = require('mongoose')

const TodoListSchema = new mongoose.Schema({
    todo: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        require: true
    },
    userId: {
      type: String,
      required: true
    }
})

module.exports = mongoose.model('Todo', TodoListSchema)