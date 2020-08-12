import React from "react";

import "./styles.css";

const ListItem = (props) => {
  const { data, onDeleteItem } = props;

  return (
    <li className="LiItemRoot">
      <span className="ListItemImageNameRoot">
        <img
          src={data.img_url}
          className="ListItemImage"
          alt={`${data.name}`}
        />
        {data.name || `item-${data.id}` || "Item"}
      </span>
      <span onClick={() => onDeleteItem(data)} className="LiItemDelete">
        X
      </span>
    </li>
  );
};

export default ListItem;
