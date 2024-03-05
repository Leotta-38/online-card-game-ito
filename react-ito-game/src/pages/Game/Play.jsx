import './Play.css'
import { Outlet } from 'react-router-dom'
import GivenCard from '../../components/GivenCard'
import GivenNumber from '../../components/GivenNumber'
import ResponseForm from '../../components/ResponseForm'
import PreCardList from '../../components/PreCardList'
import PostCardList from '../../components/PostCardList'
import OrderForm from '../../components/OrderForm'
import CheckForm from '../../components/CheckForm'


function Card({ connection, username, players, isGameMaster, isChecked }) {

  const playerObj = players.find(player => player.username === username)
  const isNotFinishedOrder = players.map(player => player.orderid).includes(null)

  return (
    <section className="play">
      <div className='wrapper'>
        {!playerObj.response
          ? <GivenCard player={playerObj} />
          : <GivenNumber player={playerObj} />
        }
        <ResponseForm connection={connection} />
      </div>

      <PreCardList players={players} />
      <PostCardList players={players} isChecked={isChecked} />

      {isGameMaster && playerObj.response && isNotFinishedOrder && <OrderForm players={players} connection={connection} />}
      {isGameMaster && playerObj.response && !isNotFinishedOrder && !isChecked && <CheckForm connection={connection} />}

      <Outlet />
    </section>
  )
}

export default Card