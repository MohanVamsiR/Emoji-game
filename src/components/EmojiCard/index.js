// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, selectedEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    selectedEmoji(id)
  }

  return (
    <li className="emoji-list-items">
      <button type="button" className="emoji-btn" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
