const QuestCardButton = (props) => {
    return (
      <div>
        {props.button && <button>{props.button}</button>}
      </div>
    );
  };

export { QuestCardButton };