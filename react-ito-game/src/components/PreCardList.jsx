import './CardList.css'
import Card from './Card'

function PreCardList({ players }) {
  return (
    <section className="card-list">
      {players.map((player, idx) => 
        <div key={player.id} >
          {player.response && !player.orderid &&
            <Card player={player} playerIdx={idx}/>
          }
        </div>
      )}
    </section>
  )
}

export default PreCardList