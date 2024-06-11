/**
 * Renders text content for a card, optionally with line breaks or a span element.
 *
 * @param {object} textProps - An object containing text content and formatting options.
 *   - `textProps.p` (string): The primary paragraph text.
 *   - `textProps.p2` (string | undefined): Optional additional paragraph text displayed after a line break.
 *   - `textProps.spanText` (string | undefined): Optional text to be wrapped in a `<span>` element.
 *   - `textProps.format` (string | undefined): Optional, Controls how the text is displayed.
 *      - "lineBreak" (optional): Inserts a line break between `textProps.p` and `textProps.p2`.
*       - "span" (optional): Wraps `textProps.spanText` within a `<span>` element.
 *
 * @returns {JSX.Element} The JSX element representing the card text.
 */
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