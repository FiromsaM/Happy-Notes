const Todo =  require('../models/Todolist')

module.exports = {
    todoGet: async (req, res) => {
        console.log(req.user)
        try {
            const todoItem = await Todo.find({userId:req.user.id})
            const todoLeft = await Todo.countDocuments({userId:req.user.id, completed: false})
            res.render('todo.ejs', { todo: todoItem, left: todoLeft, user: req.user})
        } catch (error) {
            console.log(error)
        }
    },
    createTodo: async (req, res) => {
        try {
            await Todo.create({ todo: req.body.todo, completed: false, userId: req.user.id})
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