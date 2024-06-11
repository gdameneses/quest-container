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