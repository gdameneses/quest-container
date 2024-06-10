const QuestCardTitle = (props) => {
    return (
      <div className="card__header">
        <h2 className={ props.modifier ? `card__title ${props.modifier}` : `card__title`}>{props.content}</h2>
      </div>
    );
  };

export { QuestCardTitle };