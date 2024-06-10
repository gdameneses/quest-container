const CardText = ({textProps}) => {
    if (textProps.format === 'lineBreak') {
        return (
            <p className="card__text">{textProps.p}<br></br>{textProps.p2}</p>
        )
    } else if (textProps.format === 'span') {
        return (
            <p className="card__text">{textProps.p}<span>{textProps.spanText}</span>{textProps.p2}</p>
        )
    } else {
        return (
            <p className="card__text">{textProps.p}</p>
        )
    }
}

export { CardText };