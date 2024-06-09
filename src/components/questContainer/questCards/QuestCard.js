const QuestCard = ({ logo, title, text, button }) => {
    return (
      <div className="quest-card">
        <img src={logo} alt="Quest logo" />
        <h2>{title}</h2>
        <p>{text}</p>
        {button && <button>{button}</button>}
      </div>
    );
  };

export default QuestCard;