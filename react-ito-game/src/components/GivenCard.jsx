import './GivenCard.css'
import Card from './Card'

function GivenCard({ player }) {
  return (
    <section className="given-card">
      <p>{player.username}, your card is: </p>
      <div className="wrapper">
        <Card player={player} />
      </div>
    </section>
  )
}

export default GivenCard