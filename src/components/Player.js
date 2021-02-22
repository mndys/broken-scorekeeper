import './Player.css'
import Button from './Button'

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <section className="Player">
      {name}
      <div className="Player__score">
        <Button text="-" onClick={onMinus} />
        <span>{score}</span>
        <Button text="+" onClick={onPlus} />
      </div>
    </section>
  )
}
