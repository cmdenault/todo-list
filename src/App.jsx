//
import { useState, useEffect } from 'react'
  // useState functions to update stateful variables
  // useEffect functions to allow for use of localStorage
import ToDoInput from '../components/ToDoInput'
import ToDoList from '../components/ToDoList'
import './App.css'

function App() {

  // define ds here so list and input child components can access
  // let todos = [
  //   'tennis workout',
  //   'stairs/walk/run',
  //   'thrift'
  // ] 

  // because the user will interact and change this variable (list)
  // we will use a stateful variable
  // follow the form: const [variable_name, setter_name] = useState({inital state, usually empty list []})
  const [todos, setTodos] = useState(['tennis workout',
    'stairs/walk/run',
    'thrift'])

  // since user interacts and changes this, useState is necessary
  // since editing takes place in input component, the variables must be in parent
  const [newTodo, setNewTodo] = useState('') // input from input box

  ///// here we can write functions to handle actions 

  // persist data to local storage
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
    // set the JSON obj with the key "todos"

  }

  function handleAddTodos(newTodo) {
    // add a new todo item by appending it to a copy of list + new item
    const newTodos = [...todos, newTodo]
    persistData(newTodos) // persist it to local storage
    setTodos(newTodos)
  }

  function handleDeleteTodo(index) {
    // given the index of item to delete
    const newTodos = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })

      // filter method creates new array that pass test provided by a function
      // function returns if the current index !== target deletion index

    persistData(newTodos)
    setTodos(newTodos)
  }

  function handleEditTodo(index) {
    // add current text of to be edited item to the input editor
    const valueToEdit = todos[index]
    setNewTodo(valueToEdit)

    // delete the original item
    handleDeleteTodo(index)
  
    // user will add the new item on button click 
  }

  // listens for a certain event, then executes something
  // takes in arrow funtion and [when to change]
  // allows for use of local storage
  useEffect(() => {

    if (!localStorage) { // if local storage doesn't exist, exit
      return
    }

    let localTodos = localStorage.getItem('todos')

    if (!localTodos) { // if not found, return?
      return
    }

    // if it does exist, we need to parse JSON value to get list
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, []) // set to run on start-up, includes any refreshes


  return (
    <main>
      "hello world!"
      <ToDoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}></ToDoList>


      {/* we'll pass handleAddTodos as a prop so input can use it */}
      <ToDoInput newTodo={newTodo} setNewTodo={setNewTodo} handleAddTodos={handleAddTodos}></ToDoInput>
    </main>
  )
}

export default App

// npm create vite@latest
// npm install
// npm run dev