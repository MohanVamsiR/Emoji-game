// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, isWon, onclickPlayAgain} = props

  const onClickPlayAgain = () => {
    onclickPlayAgain()
  }

  const gameResult = isWon ? 'You Won' : 'You Lose'
  const finalScore = isWon ? 'Best Score' : 'Score'
  const img = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="card-bg">
      <div className="img-container">
        <img src={img} alt="win or lose" className="result-img" />
      </div>
      <div className="text-container">
        <h1 className="won">{gameResult}</h1>
        <p className="score-para">{finalScore}</p>
        <p className="total-score">{score}/12</p>
        <button type="button" className="play-btn" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
