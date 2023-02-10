import styles from './StatusTasks.module.css'

function StatusTasks({ tasks, handleTaskCounter }) {
  return (
    <div className={styles.status_taks}>
      <p>Tarefas criadas <span>{tasks.length}</span></p>
      <p>Concluídas <span>{handleTaskCounter()} de {tasks.length}</span></p>
    </div>
  )
}

export default StatusTasks