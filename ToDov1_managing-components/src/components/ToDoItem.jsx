import React from "react";

const Item = props => {
  return (
    <li
      onClick={() => {
        props.onDelete(props.id);
      }}
    >
      {props.item}
    </li>
  );
};

export default Item;
