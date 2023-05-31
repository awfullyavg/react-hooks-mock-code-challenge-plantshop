import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  //Now that we have plants here we need to map over it using the component PlantCard
  
  const arrayedPlants = plants.map((plant) => (
    <PlantCard 
    key = {plant.id}
    name = {plant.name}
    image = {plant.image}
    price = {plant.price}
    />
  ))
  
  return (
    <ul className="cards">{arrayedPlants}</ul>
  );
}

export default PlantList;
