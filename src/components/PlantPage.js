import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, setPlants}) {
  const [searchTerm, setSearchTerm] = useState("")
  

const filteredPlants = plants.filter((plant) => (
  plant.name.toLowerCase().includes(searchTerm.toLowerCase())
))

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search setSearchTerm={setSearchTerm}/>
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
