import React from "react";
import "./styles.css";

const ItemPrice = (props) => {
  const { price = 0 } = props;

  return <div className="ItemPriceRoot">{price}</div>;
};

export default ItemPrice;
