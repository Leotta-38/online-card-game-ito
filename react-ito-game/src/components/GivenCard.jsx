import './GivenCard.css'
import Card from './Card'

function GivenCard({ player, playerIdx }) {
  return (
    <section className="given-card">
      <p>{player.username}, your card is: </p>
      <div className="wrapper">
        <Card player={player} playerIdx={playerIdx} />
      </div>
    </section>
  )
}

export default GivenCard