const CardTitle = (props) => {
    return (
        <h2 className={ props.modifier ? `card__title ${props.modifier}` : `card__title`}>{props.content}</h2>
    );
  };

export { CardTitle };