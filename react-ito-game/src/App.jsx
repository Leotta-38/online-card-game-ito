import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import TopPage from './pages/TopPage/TopPage'
import StartForm from './pages/TopPage/StartForm'
import Room from './pages/TopPage/Room'
import Game from './pages/Game/Game'
import Topic from './pages/Game/Topic'
import Play from './pages/Game/Play'
import Result from './pages/Game/Result'

function App() {
  const [connection, setConnection] = useState(null)
  const [username, setUsername] = useState('')
  const [players, setPlayers] = useState([])
  const [topic, setTopic] = useState({})
  const [isChecked, setIsChecked] = useState(false)
  const [isDemoMode, setIsDemoMode] = useState(false)

  function callSetConnection(data) {
    setConnection(data)
  }

  function callSetUsername(data) {
    setUsername(data)
  }

  function callSetPlayers(data) {
    setPlayers(data)
  }

  function callSetTopic(data) {
    setTopic(data)
  }

  function callSetIsChecked(boolean) {
    setIsChecked(boolean)
  }

  function callSetIsDemoMode() {
    setIsDemoMode(true)
  }

  return (
    <section className='App'>

      <Routes>
        <Route path="/" element={<TopPage />}>
          <Route path="" element={<StartForm
            callSetConnection={callSetConnection} 
            callSetUsername={callSetUsername}
            callSetPlayers={callSetPlayers}
            callSetTopic={callSetTopic}
            callSetIsChecked={callSetIsChecked}
          />}/>
          <Route path="room" element={<Room
            connection={connection} 
            players={players} 
          />}/>
        </Route>
        <Route path="/game" element={<Game topic={topic}/>}>
          <Route path="" element={<Topic 
            connection={connection} 
            callSetIsDemoMode={callSetIsDemoMode}
          />}/>
          <Route path="play" element={<Play 
            connection={connection} 
            username={username}
            players={players}
            isChecked={isChecked}
            isDemoMode={isDemoMode}
          />}>
            <Route path="result" element={<Result 
              connection={connection} 
              players={players}
            />}/>
          </Route>
        </Route>
      </Routes>

      <footer>
        <p>&copy; Leotta 2024</p>
      </footer>
    </section>
  )
}

export default App
