/**
 * Renders a set of control buttons for a card.
 *
 * @param {object[]} controlProps - An array of objects representing the control buttons.
 * each array element represents an icon to be displayed
 */
const CardControl = ({ controlProps }) => {

    const createElement = (element) => (
      <i className={element}></i>
    );
  
    return (
      <div className="card__control">
        {controlProps.map(createElement)}
      </div>
    );
  };
  
  export { CardControl };