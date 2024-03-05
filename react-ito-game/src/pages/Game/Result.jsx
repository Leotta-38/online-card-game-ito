import './Result.css'
import ResultMessage from '../../components/ResultMessage'
import ContinueForm from '../../components/ContinueForm'

function Result({ connection, players, isGameMaster }) {
  return (
    <section className="result">
      <ResultMessage players={players} />
      {isGameMaster && <ContinueForm connection={connection} />}
    </section>
  )
}

export default Result