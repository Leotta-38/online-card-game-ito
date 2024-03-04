import './Room.css'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { msgTypeList, sendWs } from '../utils/ws_service'


function Room({ connection, players, isGameMaster }) {
  const navigate = useNavigate()

  function handleClick() {
    const msg = {
      type: msgTypeList.REQ_GAME_START
    }
    sendWs(connection, msg)
    navigate("/game")
  }

  return (
    <section className="room">
      <div className="grid-wrapper">
        {players.map((player, idx) => 
          <div key={idx}>
            <p>{player.username}</p>
            {player.id === 1 && <p>game master</p>}
          </div>
        )}
      </div>
      {isGameMaster && 
        <Button 
          onClick={handleClick}
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

export default Room