import './StartForm.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { msgTypeList, connectWebSocket } from '../../utils/ws_service'

function StartForm({ callSetConnection, callSetUsername, callSetPlayers, callSetIsGameMaster, callSetTopic, callSetIsChecked }) {
  const [formData, setFormData] = useState('')
  const navigate = useNavigate()

  function handleChange(e) {
    setFormData(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const msg = {
      type: msgTypeList.REQ_JOIN_ROOM,
      username: formData
    }
    connectWebSocket(msg, callSetConnection, callSetPlayers, callSetIsGameMaster, callSetTopic, callSetIsChecked, navigate)
    callSetUsername(formData)
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

export default StartForm