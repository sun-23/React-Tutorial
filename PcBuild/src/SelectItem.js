import React from "react";

function SelectItem(props) {

  const name = props.selectData.name

  return (
    <div className="Selectitem" onClick={() => props.onSelect(props.data.type)}>
      <img src={props.selectData.img}></img>
      <h3>{name}</h3>
    </div>
  );
}

export default SelectItem;
