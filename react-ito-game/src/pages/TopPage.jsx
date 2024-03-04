import './TopPage.css'
import StartFrom from '../components/StartForm'
import Room from '../components/Room'


function TopPage({ connection, callSetConnection, players, callSetPlayers, isGameMaster, callSetIsGameMaster }) {

  return (
    <section className="top-page">
      <h1>Ito</h1>
      <p>ver. 1.0.0</p>

      {players
        ? <Room connection={connection} players={players} isGameMaster={isGameMaster} />
        : <StartFrom callSetConnection={callSetConnection} callSetPlayers={callSetPlayers} callSetIsGameMaster={callSetIsGameMaster}/>
      }

    </section>
  )
}

export default TopPage