import React from "react";

import "./styles.css";

const OrderSummary = (props) => {
  const { itemList = [] } = props;

  const getTotalItems = (itemList) => {
    return itemList.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalAmount = (itemList = []) => {
    return itemList.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getDiscount = (itemList = []) => {
    return itemList.reduce(
      (sum, item) => sum + (item.discount / 100) * item.price * item.quantity,
      0
    );
  };

  const getTypeDiscount = (itemList = []) => {
    return itemList.reduce((sum, item) => {
      if (item.type === "fiction")
        return sum + ((item.discount + 15) / 100) * item.price * item.quantity;
      else return 0;
    }, 0);
  };

  return (
    <div className="OrderSummaryRoot">
      <span className="OrderSummaryTitle">Total</span>

      <span className="OrderSummaryContent">
        <span>{`Items (${getTotalItems(itemList)}) :`}</span>

        <span>$ {getTotalAmount(itemList)}</span>
      </span>

      <span className="OrderSummaryContent">
        <span>{`Discount :`}</span>

        <span>{`$ ${getDiscount(itemList)}`}</span>
      </span>

      <span className="OrderSummaryContent">
        <span> {`Type Discount : `}</span>

        <span> {`$ ${getTypeDiscount(itemList)}`}</span>
      </span>

      <span className="OrderSummaryContent TotalOrderRoot">
        <span>{`Order Total :`}</span>

        <span>
          {`$ ${
            getTotalAmount(itemList) -
            (getDiscount(itemList) + getTypeDiscount(itemList))
          }`}
        </span>
      </span>
    </div>
  );
};

export default OrderSummary;
