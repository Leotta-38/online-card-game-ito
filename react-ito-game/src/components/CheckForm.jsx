import './CheckForm.css'
import Button from '@mui/material/Button'
import { msgTypeList, sendWs } from '../utils/ws_service'


function CheckForm({ connection }) {
  function handleClick1() {
    const msg = {
      type: msgTypeList.REQ_RESET_ORDER
    }
    sendWs(connection, msg)
  }

  function handleClick2() {
    const msg = {
      type: msgTypeList.REQ_CHECK_ORDER
    }
    sendWs(connection, msg)
  }

  return (
    <section className="check-form">
      <div className='wrapper'>
        <Button 
          onClick={handleClick1}
          variant="contained" 
          size="large" 
        >
          Reset order
        </Button>
        <Button 
          onClick={handleClick2}
          variant="contained" 
          size="large" 
          color="secondary"
        >
          Check order
        </Button>
      </div>
    </section>
  )
}

export default CheckForm