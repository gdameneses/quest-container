/**
 * CardAction component renders a button with elements provided in the props.
 * 
 * @param {object} actionProps.elements - An object containing key-value pairs representing elements to be rendered within the button.
 * @param {string} [actionProps.elements.icon] - The icon class name (e.g., "icon-box-arrow-up-right").
 * @param {string} [actionProps.elements.text] - The text content to be displayed within the button.
 * @param {string} [actionProps.modifier] - An optional modifier class name to be applied to the button (e.g., "primary").
 * Based on the actionProps.elements, it is fully dynamic, allowing rendering of icons or texts as needed
 * Can be improved to follow a ComponentPattern standard following Action.Icon or Action.Text
 * for better semantics
 */

const CardAction = ({ actionProps }) => {
  const { elements, modifier } = actionProps;

  const createElement = ({key, value}) => {
    if (key === `icon`) {
      return (
        <i className={value}></i>
      )
    }
    else {
      return value
    }
  };
  return (
    <button className={modifier ? `card__action ${modifier}` : `card__action`}>
      {elements && Object.entries(elements).map(([key, value]) => (
        createElement({ key, value })
      ))}
    </button>
  );
};

export { CardAction };