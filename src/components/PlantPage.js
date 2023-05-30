import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

//For search we want to use State
function PlantPage({plants, setPlants}) {
//Need to passdown your setter function to Search so it can be used
const [searchTerm, setSearchTerm] = useState("")

//Make a filter variable on the data ('plants')
const filteredPlants = plants.filter((plant) => (
  plant.name.toLowerCase().includes(searchTerm.toLowerCase())
))



  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search setSearchTerm={setSearchTerm} />
      <PlantList plants = {filteredPlants} />
    </main>
  );
}

export default PlantPage;
