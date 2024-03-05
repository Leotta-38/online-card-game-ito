import './Room.css'
import Button from '@mui/material/Button'
import { msgTypeList, sendWs } from '../../utils/ws_service'


function Room({ connection, players, isGameMaster }) {

  function handleClick() {
    const msg = {
      type: msgTypeList.REQ_GET_TOPIC
    }
    sendWs(connection, msg)
  }

  return (
    <section className="room">
      <div className="wrapper">
        {players.map((player, idx) => 
          <div key={idx} className='username'>
            <p>{player.username}</p>
            {player.id === 1 && <p><small>game master</small></p>}
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