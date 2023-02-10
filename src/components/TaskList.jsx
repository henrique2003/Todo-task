import EmptyList from './EmptyList'
import TaskItem from './TaskItem'
import styles from './TaskList.module.css'

function TaskList({ tasks, deleteTask, handleTaskDone }) {
  return (
    <div className={tasks.length > 0 ? styles.taskList : styles.taskListActive}>
      {(tasks.length === 0) ? <EmptyList /> : (
        tasks.map(task => <TaskItem key={task.id} task={task} deleteTask={deleteTask} handleTaskDone={handleTaskDone} />)
      )}
    </div>
  )
}

export default TaskList