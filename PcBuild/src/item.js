import React from "react";

function Item(props) {

  function Add() {
    props.onAdd(props.data);
  }

  return(
    <div className="divItem">
        <h1>AMD</h1>
        <h2>{props.data.name}</h2>
        <img src={props.data.img} />
        <h2>Price 69000 Bath id:{props.data.id}</h2>
        <button onClick={Add}>Add</button>
    </div>
  );
}

export default Item;