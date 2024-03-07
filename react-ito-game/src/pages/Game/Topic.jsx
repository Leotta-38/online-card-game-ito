import './Topic.css'
import Button from '@mui/material/Button'
import { msgTypeList, sendWs } from '../../utils/ws_service'


function Topic({ connection, callSetIsDemoMode }) {
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

  function handleClick3() {
    const msg = {
      type: msgTypeList.REQ_DEMO_MODE
    }
    sendWs(connection, msg)
    callSetIsDemoMode()
  }


  return (
    <section className="topic">
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
        <Button 
          onClick={handleClick3}
          variant="contained" 
          size="large" 
          color="warning"
        >
          Demo mode
        </Button>
      </div>
    </section>
  )
}

export default Topic