import './ResponseForm.css'
import { useState } from 'react'
import { msgTypeList, sendWs } from '../utils/ws_service'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

function ResponseForm({ connection, player }) {
  const [formData, setFormData] = useState('')

  function handleChange(e) {
    setFormData(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const msg = {
      type: msgTypeList.REQ_SUBMIT_RESPONSE,
      response: formData
    }
    sendWs(connection, msg)
    setFormData('')
  }

  return (
    <section className="response-form">
      <p>Think of an answer that represents your number</p>
      <form onSubmit={handleSubmit}>
        <TextField 
          required 
          size="small" 
          id="filled-basic"
          variant="filled" 
          color="secondary"
          label="Your answer" 
          value={formData}
          onChange={handleChange}
        />
        <Button 
          type="submit"
          variant="contained" 
          size="large" 
          color="secondary"
        >
          {player.response 
          ? 'Update'
          : 'Share'
          }
        </Button>
      </form>
    </section>
  )
}

export default ResponseForm