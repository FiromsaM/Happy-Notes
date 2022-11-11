const Todo =  require('../models/todolist')

module.exports = {
    todoGet: async (req, res) => {
        try {
            const todoItem = await Todo.find()
            const todoLeft = await Todo.countDocuments({completed: false})
            res.render('todo.ejs', { todos: todoItem, left: todoLeft})
        } catch (error) {
            console.log(error)
        }
    },
    createTodo: async (req, res) => {
        try {
            await Todo.create({ todo: req.body.todo, completed: false})
            console.log('Todo has been added')
            res.redirect('/todo')

        } catch (error) {
            console.log(error)
        }
    },
    markCompleted: async (req, res) => {
        try {
            await Todo.findByIdAndUpdate({_id: req.body.todoIdFromJSFile}, {
                completed: true
            })
            console.log('Marked complete')
            res.json('Marked completed')
        } catch (error) {
            console.log(error)
        }
    },
    markIncompleted: async (req, res) =>{
        try {
            await Todo.findOneAndUpdate({_id: req.body.todoIdFromJSFile}, {
                completed: false
            })
            console.log('Mark Incomplete')
            res.json('Marked Incomplete')         
        } catch (error) {
            console.log
        }
    },
    deleteTodo: async (req, res) => {
        try {
            await Todo.deleteOne({_id: req.body.todoIdFromJsFile})
            console.log('Deleted Todo')
            res.json('Deleted Todo')
            
        } catch (error) {
            console.log(error)
        }
    }
}