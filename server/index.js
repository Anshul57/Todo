const express = require('express')
const cors = require("cors")
const bodyParser = require('body-parser');
const app = express()

let data = []
let id = 0
app.use(bodyParser.json());
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.json(data)
})
app.post('/add-todo', (req, res) => {
    const todo = req.body.todo;
    id++;
    data.push({ todo: todo, id: id })
    res.json(data)
})
 
app.delete('/delete-todo/:id', (req, res) => {
    const todoId = parseInt(req.params.id)
    data = data.filter(item => item.id !== todoId)
    res.json(data)

})

app.put('/update-todo', (req, res) => {
    const idTodo = parseInt(req.body.id)
    const newTodo = req.body.todo
    const index = data.findIndex(item => item.id === idTodo); 
    if (index !== -1){
        data[index].todo = newTodo
        res.json(data)
    }else(
        res.status(404).json({error: "Todo item not found"})
    )
    
    res.json(data)

})
app.listen(3000, () => {
    console.log("Server is running at port 3000!")
})