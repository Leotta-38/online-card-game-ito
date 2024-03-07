import './GameStart.css'
import Button from '@mui/material/Button'
import { msgTypeList, sendWs, closeWs } from '../utils/ws_service'
import { useNavigate } from 'react-router-dom'


function GameStart({ connection }) {
  const navigate = useNavigate()

  function handleClick1() {
    const msg = {
      type: msgTypeList.REQ_EXIT_ROOM
    }
    sendWs(connection, msg)
    closeWs(connection)
    navigate('/')
  }

  function handleClick2() {
    const msg = {
      type: msgTypeList.REQ_GET_TOPIC
    }
    sendWs(connection, msg)
  }

  return (
    <section className="game-start">
      <Button 
        onClick={handleClick1}
        variant="contained" 
        size="large" 
        >
        Exit room
      </Button>
      <Button 
      onClick={handleClick2}
      variant="contained" 
      size="large" 
      color="secondary"
      >
        Start game
      </Button>
    </section>
  )
}

export default GameStart