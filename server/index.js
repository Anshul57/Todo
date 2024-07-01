const express = require('express')
const cors = require("cors")
const bodyParser = require('body-parser');
const app = express()
const mongoose = require('mongoose')

// let data = []
// let id = 0

app.use(bodyParser.json());
app.use(cors())
app.use(express.json())


const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/todoDB", {
            useNewUrlParser: true,
      useUnifiedTopology: true,
        })
        console.log("MongoDB connected")
    } catch (error) {
        console.error("Problem with mongoDB: "+ error)
    }

}

connectDb()
const todoSchema = new mongoose.Schema({
    todo: String
})

app.get('/', async (req, res) => {

    res.json(await Todo.find())
})
app.post('/add-todo', async (req, res) => {
    const todo = req.body.todo;
    // id++;
    // data.push({ todo: todo, id: id })

    // res.json(data)

    const newTodo = new Todo({
        todo: todo
    })

    await newTodo.save()
    res.json(await Todo.find())
})
 
app.delete('/delete-todo/:id', async (req, res) => {
    // const todoId = parseInt(req.params.id)
    // data = data.filter(item => item.id !== todoId)
    // res.json(data)
    
    await Todo.findByIdAndDelete(req.params.id)
    res.json(await Todo.find())
})

app.put('/update-todo', async (req, res) => {
    // const idTodo = parseInt(req.body.id)
    // const newTodo = req.body.todo
    // const index = data.findIndex(item => item.id === idTodo); 
    // if (index !== -1){
    //     data[index].todo = newTodo
    //     res.json(data)
    // }else(
    //     res.status(404).json({error: "Todo item not found"})
    // )
    
    // res.json(data)
    await Todo.findByIdAndUpdate(req.body.id,{todo: req.body.todo})
    res.json(await Todo.find())

})
app.listen(3000, () => {
    console.log("Server is running at port 3000!")
})

const Todo = mongoose.model('Todo', todoSchema);