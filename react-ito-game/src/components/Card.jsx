import './Card.css'

function Card({ player, isChecked }) {

  return (
    <section className="card">
      {player.response && 
        <p>{player.response}</p>
      }
      {!player.response || isChecked
        ? <p>{player.number}</p>
        : <p>?</p>
      }
      {player.response && 
        <p>by {player.username}</p>
      }
    </section>
  )
}

export default Card