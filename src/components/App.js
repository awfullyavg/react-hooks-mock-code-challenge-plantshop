//Step 1: Find where you will be using the useEffect and useState
import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
//Step 3: Make a state
  const [plants, setPlants] = useState([])

//Step 2: make the fetch. 
  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then((resp) => resp.json())
    .then((plants) => setPlants(plants))
  }, [])
//Step 4 pass down props plants
  return (
    <div className="app">
      <Header />
      
      <PlantPage plants = {plants} setPlants={setPlants} />
    </div>
  );
}

export default App;
