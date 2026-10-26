import checkIcon from '../assets/check_icon.png'

function TaskCounter({ total, completed }) {
  return (
    <span className="task-counter">
      <img src={checkIcon} alt=""/>
      {total} / {completed}
    </span>
  )
}

export default TaskCounter