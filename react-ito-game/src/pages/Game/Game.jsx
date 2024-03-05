import './Game.css'
import { Outlet } from 'react-router-dom'

function Game({ topic }) {
  return (
    <section className="game">
      <h1>Ito</h1>
      <h4>Your topic is:</h4>
      <div>
        <h2>{topic.name}</h2>
        <p><span>1: {topic.min}</span><span>100: {topic.max}</span></p>
      </div>

      <Outlet />
    </section>
  )
}

export default Game