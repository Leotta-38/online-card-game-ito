import './CheckForm.css'
import Button from '@mui/material/Button'
import { msgTypeList, sendWs } from '../utils/ws_service'


function CheckForm({ connection }) {
  function handleClick() {
    const msg = {
      type: msgTypeList.REQ_CHECK_ORDER
    }
    sendWs(connection, msg)
  }

  return (
    <section className="check-form">
      <Button 
        onClick={handleClick}
        variant="contained" 
        size="large" 
        color="secondary"
      >
        Check order
      </Button>
    </section>
  )
}

export default CheckForm