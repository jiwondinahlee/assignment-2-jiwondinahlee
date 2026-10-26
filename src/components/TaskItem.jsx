function TaskItem({ task }) {
  return (
    <li>
      <input type="checkbox" />
      {task.text}
    </li>
  )
}

export default TaskItem