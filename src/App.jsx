import './App.css'
import menuIcon from './assets/menu_icon.png'
import searchIcon from './assets/search_icon.png'
import checkIcon from './assets/check_icon.png'
import inboxIcon from './assets/inbox_icon.png'
import calendarIcon from './assets/calendar_icon.png'
import upcomingIcon from './assets/upcoming_icon.png'

// Assignment 2: build the Task Manager here.
// Step 1 (after the Oct 12 class): hard-coded tasks, the five components, props.
// Step 2 (after the Oct 19 class): useState, the controlled form, toggle, delete, filtering.
function App() {
  return (
    <div className="app">
      <header>
        <img src={menuIcon} alt="Menu" className="menu-icon"/>
        <form role="search">
          <img src={searchIcon} alt="Search"/>
          <input type="text" placeholder="Quick Find"/>
        </form>
        <span className="task-counter">
          <img src={checkIcon} alt=""/>
          30/5
        </span>
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
        <ul>
          <li>
            <input type="checkbox"/>
            Call Mom
          </li>
          <li>
            <input type="checkbox"/>
            Buy the new issue of Scientific American
          </li>
          <li>
            <input type="checkbox"/>
            Return the textbook to Josie
          </li>
          <li>
            <input type="checkbox"/>
            Buy the new album by Rake
          </li>
          <li>
            <input type="checkbox"/>
            Buy a gift card for Dad
          </li>
        </ul>
      </main>
    </div>
  )
}

export default App
