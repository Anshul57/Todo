import axios, { AxiosError } from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Form from './components/Form'
import Todo from './components/Todo'
function App() {
  const [todo, setTodo] = useState("")
  const [data, setData] = useState([])

  const fetchData = async() => {
    try {
      const response = await axios.get("http://localhost:3000/")
      setData(response.data)
      console.log(response.data)
    } catch (error) {
      console.error("Axios fetched an error: "+ error)
    }
  }

  const addTodo = async () => {
    
    try {
      const response = await axios.post("http://localhost:3000/add-todo", {todo: todo})
      setData(response.data)
    } catch (error) {
      console.error("Unable to post error: " + error)
    }


  }

  const deleteTodo = async (id) => {
    try {
      console.log(id)
        const response = await axios.delete("http://localhost:3000/delete-todo/" + id)
        setData(response.data)
        console.log(response.data)
    } catch (error) {
      console.error("Unable to delete error: "+ error)
    }
  }
  const updateTodo = async (todo, id) => {
    try {
      const response = await axios.put("http://localhost:3000/update-todo/", {todo: todo, id:id})
      setData(response.data)
    } catch (error) {
      console.error("Unable to update error :" + error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='bg-black w-full min-h-screen font-poppins text-white'>
      <h1 className='text-3xl ml-[43%] pt-10'>Task Tracker</h1>
      <Form todo={todo} setTodo={setTodo} fetchData={fetchData} addTodo={addTodo}/>
      <Todo data={data} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default App
