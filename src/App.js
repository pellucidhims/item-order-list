import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import ItemList from "./components/ItemList/itemList";
import OrderSummary from "./components/OrderSummary/orderSummary";
import { data } from "./templateData";

import "./styles.css";

const transformData = (data) => {
  return data.map((item) => {
    return {
      ...item,
      quantity: 1
    };
  });
};

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

export default function App() {
  const [itemListData, setItemListData] = useState(transformData(data));
  const [toastMessage, setToastMessage] = useState("");
  const toastTimeout = useRef(null);
  const [width] = useWindowSize();

  useEffect(() => {
    if (!!toastMessage) {
      if (!!toastTimeout.current) {
        clearTimeout(toastTimeout.current);
      }
      toastTimeout.current = setTimeout(() => {
        setToastMessage("");
      }, 1500);
    }
  }, [toastMessage]);

  const handleDataReset = () => {
    setItemListData(transformData(data));
  };

  const handleDeleteItem = (item) => {
    let newItemList = itemListData.filter((liItem) => {
      return liItem.id !== item.id;
    });
    setItemListData(newItemList);
    setToastMessage(`${item.quantity} Item ${item.name} Deleted`);
  };

  const handleChangeQuantity = (item, indicator) => {
    let updatedItemList = itemListData.map((liItem) => {
      if (liItem.id === item.id) {
        if (indicator > 0) {
          return {
            ...liItem,
            quantity: item.quantity + 1
          };
        } else {
          if (liItem.quantity > 1) {
            return {
              ...liItem,
              quantity: item.quantity - 1
            };
          } else return liItem;
        }
      } else {
        return liItem;
      }
    });
    setItemListData(updatedItemList);
  };

  return (
    <div className="App">
      {!!toastMessage && <div className="ToastDisplay">{toastMessage}</div>}
      <div className={`Root ${width < 700 && "RootVertical"}`}>
        <ItemList
          data={itemListData}
          onDeleteItem={handleDeleteItem}
          onChangeQuantity={handleChangeQuantity}
        />
        <OrderSummary itemList={itemListData} />
      </div>

      {itemListData && itemListData.length <= 0 && (
        <div>
          <button className="ResetData" onClick={handleDataReset}>
            Reset Item List
          </button>
        </div>
      )}
    </div>
  );
}
