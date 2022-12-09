import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {clickedList: [], isGameStart: true, topScore: 0}

  resetGame = () => {
    this.setState({clickedList: [], isGameStart: true})
  }

  showScore = () => {
    const {emojisList} = this.props
    const {clickedList} = this.state
    const isWon = clickedList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onclickPlayAgain={this.resetGame}
        score={clickedList.length}
      />
    )
  }

  finishGameAndSetTopScore = score => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (score > newTopScore) {
      newTopScore = score
    }
    this.setState({topScore: newTopScore, isGameStart: false})
  }

  onClickEmoji = id => {
    const {clickedList} = this.state
    const {emojisList} = this.props
    const isEmojiPresent = clickedList.includes(id)
    const clickedEmojisListLength = clickedList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisListLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisListLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedList: [...prevState.clickedList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  showGame = () => {
    const shuffledNewList = this.shuffledEmojisList()

    return (
      <ul className="emoji-list-container">
        {shuffledNewList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            selectedEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedList, topScore, isGameStart} = this.state
    return (
      <div className="bg">
        <NavBar
          score={clickedList.length}
          isGameStart={isGameStart}
          topScore={topScore}
        />

        <div>{isGameStart ? this.showGame() : this.showScore()}</div>
      </div>
    )
  }
}

export default EmojiGame
