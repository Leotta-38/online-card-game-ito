import './ResultMessage.css'

function ResultMessage({ players }) {
  const order = players
    .sort((a, b) => a.orderid - b.orderid)
    .map(player => player.number)

  let isOrderedCorrectly = true
  for (let i = 1; i < order.length; i++) {
    if (order[i - 1] > order[i]) {
      isOrderedCorrectly = false
    }
  }

  return (
    <section className="result-message">
      {isOrderedCorrectly
        ? <h2>Congratulations!</h2>
        : <h2>Not correct...</h2>
      }
    </section>
  )
}

export default ResultMessage