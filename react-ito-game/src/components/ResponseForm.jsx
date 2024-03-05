import './ResponseForm.css'
import { useState } from 'react'
import { msgTypeList, sendWs } from '../utils/ws_service'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

function ResponseForm({ connection }) {
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
      <form onSubmit={handleSubmit}>
        <TextField 
          required 
          size="small" 
          id="filled-basic"
          variant="filled" 
          color="secondary"
          label="response" 
          value={formData}
          onChange={handleChange}
        />
        <Button 
          type="submit"
          variant="contained" 
          size="large" 
          color="secondary"
        >
          Submit
        </Button>
      </form>
    </section>
  )
}

export default ResponseForm