import './GameStart.css'
import Button from '@mui/material/Button'
import { msgTypeList, sendWs, closeWs } from '../utils/ws_service'
import { useNavigate } from 'react-router-dom'


function GameStart({ connection, isGameMaster, callSetIsGameMaster }) {
  const navigate = useNavigate()

  function handleClick1() {
    const msg = {
      type: msgTypeList.REQ_EXIT_ROOM
    }
    sendWs(connection, msg)
    closeWs(connection)
    if (isGameMaster) {
      callSetIsGameMaster()
    }
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
      {isGameMaster && 
        <Button 
        onClick={handleClick2}
        variant="contained" 
        size="large" 
        color="secondary"
        >
          Game start
        </Button>
      }
    </section>
  )
}

export default GameStart