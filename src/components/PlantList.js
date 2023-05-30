import React from "react";
import PlantCard from "./PlantCard";



function PlantList({plants}) {
// Step 5: Make an array for the objects from the data
//Step 6: Plug in the component that you wish to render
const mappedPlants = plants.map((plant)=> (
  <PlantCard 
  key = {plant.id}
  name = {plant.name}
  image = {plant.image}
  price = {plant.price}
  />
))
 

  return (
    <ul className="cards">{mappedPlants}</ul>
  );
}

export default PlantList;
