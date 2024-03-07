import './Result.css'
import ResultMessage from '../../components/ResultMessage'
import ContinueForm from '../../components/ContinueForm'

function Result({ connection, players }) {
  return (
    <section className="result">
      <ResultMessage players={players} />
      <ContinueForm connection={connection} />
    </section>
  )
}

export default Result