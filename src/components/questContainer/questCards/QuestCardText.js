const QuestCardText = (textProps) => {
    if (textProps.format === 'lineBreak') {
        return (
            <p>{textProps.p}<br></br>{textProps.p2}</p>
        )
    } else if (textProps.format === 'span') {
        return (
            <p>{textProps.p}<span>{textProps.spanText}</span>{textProps.p2}</p>
        )
    } else {
        return (
            <p>{textProps.p}</p>
        )
    }
}

export { QuestCardText };