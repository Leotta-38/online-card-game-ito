import './Card.css'
import { msgTypeList, sendWs } from '../utils/ws_service'

function Card({ player, playerIdx, isChecked, connection, count }) {

  function handleClick(e) {
    if (count) {
      const userId = e.target.closest('.card').dataset.id
      const msg = {
        type: msgTypeList.REQ_SUBMIT_ORDER,
        id: userId,
        count: count
      }
      sendWs(connection, msg)
    }
  }

  return (
    <section className={`user-color${playerIdx} card`} onClick={handleClick} data-id={player.id}>
      {player.response && 
        <p className='card-response'>{player.response}</p>
      }
      {!player.response || isChecked
        ? <p className='card-number'>{player.number}</p>
        : <p className='card-number'>?</p>
      }
      {player.response && 
        <p className='card-username'>{player.username}</p>
      }
    </section>
  )
}

export default Card