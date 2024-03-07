import './CardList.css'
import Card from './Card'

function PostCardList({ players, isChecked }) {
  players.sort((a, b) => {
    const aOrderId = a.orderid === null ? 1000 : a.orderid
    const bOrderId = b.orderid === null ? 1000 : b.orderid

    return aOrderId - bOrderId
  })
  
  return (
    <section className="card-list">
      {players.map((player, idx) => 
        <div key={player.id} >
          {player.response && player.orderid &&
            <Card player={player} playerIdx={idx} isChecked={isChecked} />
          }
        </div>
      )}
    </section>
  )
}

export default PostCardList