import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Form from './components/Form'
import Header from './components/Header'
import StatusTasks from './components/StatusTasks'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])

  function handleCreateNewTask(task) {
    const newTask = {
      checked: false,
      content: task,
      id: uuidv4()
    }
    setTasks([...tasks, newTask])
  }

  function deleteTask(id) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== id;
    })

    setTasks(tasksWithoutDeletedOne);
  }

  function handleTaskDone(id) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.checked = !task.checked;
      }
      return task
    })
    setTasks(newTasks)
  }

  function handleTaskCounter() {
    let counter = 0;
    // eslint-disable-next-line array-callback-return
    tasks.map(task => {
      if (task.checked === true) {
        counter = counter + 1
      }
    })
    return counter
  }

  return (
    <>
      <Header />
      <Form handleCreateNewTask={handleCreateNewTask} />
      <StatusTasks tasks={tasks} handleTaskCounter={handleTaskCounter} />
      <TaskList tasks={tasks} deleteTask={deleteTask} handleTaskDone={handleTaskDone} />
    </>
  )
}

export default App
