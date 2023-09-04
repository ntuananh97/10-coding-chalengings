import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/couting-down">Countdown Timer</Link>
        </li>
        <li>
          <Link to="/quiz-app">Quiz App</Link>
        </li>
        <li>
          <Link to="/recipe-app">Recipe App</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home