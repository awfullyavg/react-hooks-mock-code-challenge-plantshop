//Step 7: import State because we use the button functionality for the stock/outof stock
//Be sure to import your props from plantlist
import React, { useState } from "react";

function PlantCard({ name, image, price}) {
  //Step 8: make the state set to true since its a button
  //Create a handleClick function then plug it in to the onClick 
  const[isInStock, setisInStock] = useState(true)

  function handleClick() {
    // if (isInStock == true) {
    //   setisInStock(false)
    // }
  setisInStock(!isInStock)
  }

  
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
