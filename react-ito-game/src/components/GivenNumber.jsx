import './GivenNumber.css'

function GivenNumber({ player, isDemoMode }) {
  return (
    <section className="given-number">
      <p>{player.username}, your number is: 
        {isDemoMode 
          ? <span> X</span>
          : <span> {player.number}</span>
        }
      </p>
    </section>
  )
}

export default GivenNumber