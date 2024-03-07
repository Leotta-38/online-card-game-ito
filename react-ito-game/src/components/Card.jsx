import './Card.css'

function Card({ player, playerIdx, isChecked }) {

  return (
    <section className={`user-color${playerIdx} card`}>
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