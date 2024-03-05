import './CardList.css'
import Card from './Card'

function PreCardList({ players }) {
  return (
    <section className="card-list">
      {players.map(player => 
        <div key={player.id} >
          {player.response && !player.orderid &&
            <Card player={player} />
          }
        </div>
      )}
    </section>
  )
}

export default PreCardList