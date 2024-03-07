import './CardList.css'
import Card from './Card'

function PreCardList({ players, connection }) {
  let count = players.filter(player => player.orderid).length
  count++

  return (
    <section className="card-list">
      {players.map((player, idx) => 
        <div key={player.id} >
          {player.response && !player.orderid &&
            <Card player={player} playerIdx={idx} connection={connection} count={count}/>
          }
        </div>
      )}
    </section>
  )
}

export default PreCardList