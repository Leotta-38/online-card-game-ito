import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import TopPage from './pages/TopPage'
import Game from './pages/Game'

function App() {
  const [connection, setConnection] = useState(null)
  const [players, setPlayers] = useState(null)
  const [isGameMaster, setIsGameMaster] = useState(false)
  const [topic, setTopic] = useState(null)

  function callSetConnection(data) {
    setConnection(data)
  }

  function callSetPlayers(data) {
    setPlayers(data)
  }

  function callSetIsGameMaster() {
    setIsGameMaster(true)
  }

  function callSetTopic(data) {
    setTopic(data)
  }

  return (
    <section className='App'>

      <Routes>
        <Route path='/' element={<TopPage 
          connection={connection} 
          callSetConnection={callSetConnection} 
          players={players} 
          callSetPlayers={callSetPlayers}
          isGameMaster={isGameMaster} 
          callSetIsGameMaster={callSetIsGameMaster}
          topic={topic}
          callSetTopic={callSetTopic}
        />} />
        <Route path='/game' element={<Game/>}/>
      </Routes>

      <footer>
        <p>&copy; Leotta 2024</p>
      </footer>
    </section>
  )
}

export default App
