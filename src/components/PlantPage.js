import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, setPlant}) {
const [searchTerm, setSearchTerm] = useState("")

const filteredPlants = plants.filter((plants) => (
  plants.name.toLowerCase().includes(searchTerm.toLowerCase())
))

  return (
    <main>
      <NewPlantForm plants={plants} setPlant={setPlant} />
      <Search setSearchTerm={setSearchTerm} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
