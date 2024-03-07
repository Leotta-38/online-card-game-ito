import './ResetForm.css'
import Button from '@mui/material/Button'
import { msgTypeList, sendWs } from '../utils/ws_service'


function ResetForm({ connection }) {
  function handleClick() {
    const msg = {
      type: msgTypeList.REQ_RESET_ORDER
    }
    sendWs(connection, msg)
  }

  return (
    <section className="reset-form">
      <Button 
        onClick={handleClick}
        variant="contained" 
        size="large" 
      >
        Reset order
      </Button>
    </section>
  )
}

export default ResetForm