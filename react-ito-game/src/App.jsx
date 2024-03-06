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
  const [isGameMaster, setIsGameMaster] = useState(false)
  const [topic, setTopic] = useState({})
  const [isChecked, setIsChecked] = useState(false)

  function callSetConnection(data) {
    setConnection(data)
  }

  function callSetUsername(data) {
    setUsername(data)
  }

  function callSetPlayers(data) {
    setPlayers(data)
  }

  function callSetIsGameMaster(boolean) {
    setIsGameMaster(boolean)
  }

  function callSetTopic(data) {
    setTopic(data)
  }

  function callSetIsChecked(boolean) {
    setIsChecked(boolean)
  }

  return (
    <section className='App'>

      <Routes>
        <Route path="/" element={<TopPage />}>
          <Route path="" element={<StartForm
            callSetConnection={callSetConnection} 
            callSetUsername={callSetUsername}
            callSetPlayers={callSetPlayers}
            callSetIsGameMaster={callSetIsGameMaster}
            callSetTopic={callSetTopic}
            callSetIsChecked={callSetIsChecked}
          />}/>
          <Route path="room" element={<Room
            connection={connection} 
            players={players} 
            isGameMaster={isGameMaster} 
            callSetIsGameMaster={callSetIsGameMaster}
          />}/>
        </Route>
        <Route path="/game" element={<Game topic={topic}/>}>
          <Route path="" element={<Topic 
            connection={connection} 
            isGameMaster={isGameMaster} 
          />}/>
          <Route path="play" element={<Play 
            connection={connection} 
            username={username}
            players={players}
            isGameMaster={isGameMaster}
            isChecked={isChecked}
          />}>
            <Route path="result" element={<Result 
              connection={connection} 
              players={players}
              isGameMaster={isGameMaster}
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
