import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then((resp) => resp.json())
    .then((data) => setPlants(data))
  }, [])

const [plants, setPlants] = useState([])


  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} setPlants={setPlants}/>
    </div>
  );
}

export default App;
