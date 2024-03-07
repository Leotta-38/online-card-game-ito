import './ContinueForm.css'
import Button from '@mui/material/Button'
import { msgTypeList, sendWs } from '../utils/ws_service'


function ContinueForm({ connection }) {
  function handleClick1() {
    const msg = {
      type: msgTypeList.REQ_CONTINUE_GAME
    }
    sendWs(connection, msg)
  }

  function handleClick2() {
    const msg = {
      type: msgTypeList.REQ_FINISH_GAME
    }
    sendWs(connection, msg)
  }

  return (
    <section className="continue-form">
      <div className='wrapper'>
        <Button 
          onClick={handleClick1}
          variant="contained" 
          size="large" 
        >
          new game
        </Button>
        <Button 
          onClick={handleClick2}
          variant="contained" 
          size="large" 
          color="secondary"
        >
          Finish game
        </Button>
      </div>
    </section>
  )
}

export default ContinueForm