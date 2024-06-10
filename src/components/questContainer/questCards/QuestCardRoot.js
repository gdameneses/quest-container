const QuestCardRoot = ({ logo, title, children, button }) => {
    return (
      <div className="quest-card">
        <img src={logo} alt="Quest logo" />
        <h2>{title}</h2>
        {children}
        {button && <button>{button}</button>}
      </div>
    );
  };

export { QuestCardRoot };