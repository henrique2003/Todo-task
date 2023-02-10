import { Trash } from 'phosphor-react'
import styles from './TaskItem.module.css'

function TaskItem({ task, handleTaskDone, deleteTask }) {
  return (
    <div className={styles.task_item}>
      <section>
        <div className={styles.customCheckbox}>
          <input id={task.id} type="checkbox" onClick={() => handleTaskDone(task.id)} />
          <label htmlFor={task.id}></label>
        </div>
        <p>{task.content}</p>
      </section>
      <button type='button' onClick={() => deleteTask(task.id)}><Trash size={18} /></button>
    </div>
  )
}

export default TaskItem
