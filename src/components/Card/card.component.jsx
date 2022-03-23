import "./card.style.scss";

function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          onClick={!disabled ? handleClick : null}
          alt="cover"
        />
      </div>
    </div>
  );
}

export default Card;
