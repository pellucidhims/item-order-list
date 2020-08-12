import React from "react";

import "./styles.css";

const QuantitySelect = (props) => {
  const { quantity = 1, addQuantity, removeQuantity } = props;

  return (
    <div className="QuantityRoot">
      <span
        onClick={removeQuantity}
        className={`QuantityControlButton ${
          quantity <= 1 && "QuantityControlButtonDisable"
        }`}
      >
        -
      </span>

      <span className="QuantityDisplayCount">{quantity}</span>

      <span onClick={addQuantity} className="QuantityControlButton">
        +
      </span>
    </div>
  );
};

export default QuantitySelect;
