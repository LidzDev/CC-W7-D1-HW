import { useState } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState([
  
    { name: "Buy shopping", priority: "high" },
    { name: "Clean bathroom", priority: "low" },
    { name: "Car's MOT", priority: "high" }
  ])

  const [newTodo, setNewTodo] = useState([
    {name: "", priority: ""}
  ])

  const todoList = todos.map((todo, index) => {
    return(
      <li key={index} className={todo.priority == "high" ? "high-priority" : "low-priority"}>
        <span>{todo.name}</span>
     </li>
    )
  })

  const handleTodoInput = (event) => {
    setNewTodo(event.target.value)
  }

  const saveNewTodo = (event) => {
    event.preventDefault()
    const copyTodos = [... todos]
    const [todoName, todoPrio] = newTodo
    copyTodos.push({name:todoName, priority:todoPrio})
    setTodos(copyTodos)
    setNewTodo("")
  } 

  return (
    <>
    <div className="App">
    <h1>To Do List</h1>
    <hr></hr>
    <form  onSubmit={saveNewTodo}>
        <label htmlFor='new-todo'>Add a new todo:</label>
        <input id='new-todo' type='text' value={newTodo.name} onChange={handleTodoInput}/>
        <input type='radio' id='priority' name='priority' value='low' />
        <label htmlFor='priority'>low</label>
        <input type='radio' id='priority' name='priority' value='high' />
        <label htmlFor='priority'>high</label>
        <input type='submit' value='Save new todo'/>
    </form>
    <ul>
      {todoList}
    </ul>
    </div>
    </>
  )
}

export default App
