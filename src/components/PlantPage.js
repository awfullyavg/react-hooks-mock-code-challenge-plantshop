import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then((resp) => resp.json())
    .then((data) => setPlants(data))
  }, [])

  //My use state now that we have to begin rendering
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPlants = plants.filter((plant) => (
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  ))

  
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants}/>
      <Search setSearchTerm={setSearchTerm}/>
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
