const QuestCardButton = (props) => {
    return (
      <button className={ props.modifier ? `card__action ${props.modifier}` : `card__action`}>{props.button}</button>
    );
  };

export { QuestCardButton };