import React from "react";
import ListItem from "../ListItem/listItem";
import QuantitySelect from "../QuantitySelect/quantitySelect";
import "./styles.css";
import ItemPrice from "../ItemPrice/itemPrice";

const itemListHeader = [
  {
    id: "1",
    label: "Item Name"
  },
  {
    id: "2",
    label: "Quantity"
  },
  {
    id: "3",
    label: "Price(per Item)"
  }
];

const ItemListHeader = (props) => {
  const { header } = props;
  return (
    <div className="ListItemRoot">
      <span className="ListItemHeader">{header.label}</span>
    </div>
  );
};

const ItemList = (props) => {
  const { data, onDeleteItem, onChangeQuantity } = props;

  return (
    <div>
      {/* <div className="ListHeaderRoot">
        {itemListHeader.map(header=>{
          return (
            <ItemListHeader header={header}/>
          )
        })}
      </div> */}
      <div>
        <ul className="ListRoot">
          {data.map((liItem) => {
            return (
              <div key={liItem.id} className="ListItemRoot">
                <ListItem data={liItem} onDeleteItem={onDeleteItem} />
                <QuantitySelect
                  quantity={liItem.quantity}
                  addQuantity={() => onChangeQuantity(liItem, 1)}
                  removeQuantity={() => onChangeQuantity(liItem, -1)}
                />
                <ItemPrice price={`$${liItem.price}`} />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ItemList;
