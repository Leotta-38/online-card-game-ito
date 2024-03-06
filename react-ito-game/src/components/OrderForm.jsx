import './OrderForm.css'
import { useState } from 'react'
import { msgTypeList, sendWs } from '../utils/ws_service'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'

function OrderForm({ players, connection }) {
  const [userId, setUserId] = useState('')
  const [count, setCount] = useState(1)

  let menuItems = players.filter(player => !player.orderid)

  function handleChange(e) {
    setUserId(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const msg = {
      type: msgTypeList.REQ_SUBMIT_ORDER,
      id: userId,
      count: count
    }
    sendWs(connection, msg)
    setCount(count + 1)
    setUserId('')
  }


  return (
    <section className="order-form">
      <form onSubmit={handleSubmit}>
        <FormControl  size="small" sx={{ m: 1, minWidth: 120 }}>
          <Select
            required 
            id="demo-select-small"
            value={userId}
            onChange={handleChange}
          >
            {menuItems.map(menuItem =>
              <MenuItem key={menuItem.id} value={menuItem.id}>{menuItem.response}</MenuItem>
            )}
          </Select>
          <Button 
            type="submit"
            variant="contained" 
            size="large" 
            color="secondary"
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </section>
  )
}

export default OrderForm