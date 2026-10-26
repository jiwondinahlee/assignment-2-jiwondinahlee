function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      {task.text}
      <button className="delete-button" onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  )
}

export default TaskItem