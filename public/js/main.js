const todoItem = document.querySelectorAll('span.not')
const itemCompleted = document.querySelectorAll('span.completed')
const deleteItem = document.querySelectorAll('.del')

Array.from(itemCompleted).forEach((el) => {
    el.addEventListener('click', markIncompleted)
})

Array.from(todoItem).forEach((el) => {
    el.addEventListener('click', markCompleted)
})

Array.from(deleteItem).forEach((el) => {
    el.addEventListener('click', deleteTodo)
})

async function markIncompleted(){
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todo/markIncompleted', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId,
            })
        })
        const data = response.json()
        console.log(data)
        location.reload()
    } catch (error) {
        
    }
}

async function markCompleted(){
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todo/markCompleted', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (error) {
        console.log(error)
    }
}

async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todo/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJsFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (error) {
        console.log(error)
    }
}