import './Play.css'
import { Outlet } from 'react-router-dom'
import GivenCard from '../../components/GivenCard'
import GivenNumber from '../../components/GivenNumber'
import ResponseForm from '../../components/ResponseForm'
import PreCardList from '../../components/PreCardList'
import PostCardList from '../../components/PostCardList'
import ResetForm from '../../components/ResetForm'
import CheckForm from '../../components/CheckForm'

function Play({ connection, username, players, isChecked, isDemoMode }) {

  const playerObj = players.find(player => player.username === username)
  const playerIdx = players.findIndex(player => player.username === username)
  const isNotFinishedOrder = players.map(player => player.orderid).includes(null)

  return (
    <section className="play">
      {!isChecked && 
        <div className='wrapper'>
          {!playerObj.response
            ? <GivenCard player={playerObj} playerIdx={playerIdx} />
            : <GivenNumber player={playerObj} isDemoMode={isDemoMode}/>
          }
          <ResponseForm connection={connection} player={playerObj} />
        </div>
      }

      <PreCardList players={players} connection={connection} />
      <div className='description'>
        <p>Discuss with other players to arrange the cards in the correct order.</p>
        <p>Click the cards to place them from the smallest to the largest number.</p>
      </div>
      <PostCardList players={players} isChecked={isChecked} />

      <div className="wrapper">
        {playerObj.response && !isChecked && <ResetForm connection={connection} />}
        {!isNotFinishedOrder && !isChecked && <CheckForm connection={connection} />}
      </div>


      <Outlet />
    </section>
  )
}

export default Play