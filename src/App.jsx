import { useState } from 'react'
import './App.css'
import menuIcon from './assets/menu_icon.png'
import searchIcon from './assets/search_icon.png'
import TaskCounter from './components/TaskCounter'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import inboxIcon from './assets/inbox_icon.png'
import calendarIcon from './assets/calendar_icon.png'
import upcomingIcon from './assets/upcoming_icon.png'

// Assignment 2: build the Task Manager here.
// Step 1 (after the Oct 12 class): hard-coded tasks, the five components, props.
// Step 2 (after the Oct 19 class): useState, the controlled form, toggle, delete, filtering.
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Call Mom", completed: false },
    { id: 2, text: "Buy the new issue of Scientific American", completed: false },
    { id: 3, text: "Return the textbook to Josie", completed: false },
    { id: 4, text: "Buy the new album by Rake", completed: false },
    { id: 5, text: "Buy a gift card for Dad", completed: false },
  ])
  const [filter, setFilter] = useState('all')

  function toggleTask(id) {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function addTask(text) {
    const newTask = { id: Date.now(), text: text, completed: false }
    setTasks([...tasks, newTask])
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <div className="app">
      <header>
        <img src={menuIcon} alt="Menu" className="menu-icon"/>
        <form role="search">
          <img src={searchIcon} alt="Search"/>
          <input type="text" placeholder="Quick Find"/>
        </form>
        <TaskCounter total={tasks.length} completed={tasks.filter((task) => task.completed).length} />

      </header>
      <nav>
        <ul>
          <li>
            <img src={inboxIcon} alt=""/>
            Inbox <span className="count">5</span>
          </li>
          <li>
            <img src={calendarIcon} alt=""/>
            Today <span className="count">5</span>
          </li>
          <li>
            <img src={upcomingIcon} alt=""/>
            Upcoming
          </li>
        </ul>
      </nav>
      <main>
        <h1>Inbox</h1>
        <div className="filters">
          <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
          <span>|</span>
          <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>Active</button>
          <span>|</span>
          <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>Completed</button>
        </div>
        <TaskForm onAdd={addTask} />
        <TaskList tasks={filteredTasks}onToggle={toggleTask} onDelete={deleteTask} />
      </main>
    </div>
  )
}

export default App
