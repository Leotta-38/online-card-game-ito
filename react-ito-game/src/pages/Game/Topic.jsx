import './Topic.css'
import Button from '@mui/material/Button'
import { msgTypeList, sendWs } from '../../utils/ws_service'


function Topic({ connection, isGameMaster }) {
  function handleClick1() {
    const msg = {
      type: msgTypeList.REQ_GET_TOPIC
    }
    sendWs(connection, msg)
  }

  function handleClick2() {
    const msg = {
      type: msgTypeList.REQ_GET_A_CARD
    }
    sendWs(connection, msg)
  }

  return (
    <section className="topic">
      {isGameMaster && 
        <div className='wrapper'>
          <Button 
            onClick={handleClick1}
            variant="contained" 
            size="large" 
          >
            Change topic
          </Button>
          <Button 
            onClick={handleClick2}
            variant="contained" 
            size="large" 
            color="secondary"
          >
            Get a card
          </Button>
        </div>
      }
    </section>
  )
}

export default Topic