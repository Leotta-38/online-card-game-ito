import './GivenNumber.css'

function GivenNumber({ player }) {
  return (
    <section className="given-number">
      <p>{player.username}, your number is: <span>{player.number}</span></p>
    </section>
  )
}

export default GivenNumber