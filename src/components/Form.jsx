/* eslint-disable no-restricted-globals */
import { useState } from 'react'
import { PlusCircle } from 'phosphor-react'

import styles from './Form.module.css'

function Form({ handleCreateNewTask }) {
  const [newTask, setNewTask] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log(newTask)
    handleCreateNewTask(newTask)
    setNewTask('')
    console.log(newTask)
  }

  function handleNewTaskChange() {
    setNewTask(event.target.value);
    event.target.setCustomValidity('')
  }

  function handleTaskInvalid() {
    event.target.setCustomValidity('Impossível criar uma tarefa vazia, preencha o campo e clique em criar.')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Adicione uma nova tarefa'
        className={styles.input}
        onChange={handleNewTaskChange}
        value={newTask}
        name='task'
        onInvalid={handleTaskInvalid}
        required
      />
      <button type='submit' className={styles.button}>
        <span>Criar</span>
        <PlusCircle weight='bold' />
      </button>
    </form>
  )
}

export default Form