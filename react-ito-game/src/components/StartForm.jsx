import './StartForm.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { msgTypeList, connectWebSocket } from '../utils/ws_service'

function StartFrom({ callSetConnection, callSetPlayers, callSetIsGameMaster }) {
  const [formData, setFormData] = useState('')

  function handleChange(e) {
    setFormData(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const msg = {
      type: msgTypeList.REQ_JOIN_ROOM,
      username: formData
    }
    connectWebSocket(msg, callSetConnection, callSetPlayers, callSetIsGameMaster)
  }

  return (
    <form className="start-form" onSubmit={handleSubmit}>
      <TextField 
        required 
        size="small" 
        id="filled-basic" 
        label="Username" 
        variant="filled" 
        color="secondary"
        onChange={handleChange}
      />
      <Button 
        type="submit"
        variant="contained" 
        size="large" 
        color="secondary"
      >
        Join room
      </Button>
    </form>
  )
}

export default StartFrom