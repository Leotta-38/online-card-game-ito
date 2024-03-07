import './Room.css'
import GameStart from '../../components/GameStart'

function Room({ connection, players }) {

  return (
    <section className="room">
      <div className='wrapper1'>
        <p>{players.length} / 6</p>
        <div className="wrapper2">
          {players.map((player, idx) => 
            <div key={idx} className={`user-color${idx} username`}>
              <p>{player.username}</p>
            </div>
          )}
        </div>
      </div>
      <GameStart connection={connection} />
    </section>
  )
}

export default Room