import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  //After importing UseEffect I need to run the fetch using UseEffect
  useEffect(() => {
    fetch ('http://localhost:6001/plants')
    .then((resp) => resp.json())
    .then((data) => setPlant(data))
  }, [])

  //Now I need to get the data passed down by using useState
  //Then need to use the setPlant inside of the fetch to grab the data in the plant state
  //console.log(plant) and send it down to the right component using props
  const [plant, setPlant] = useState([])

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plant} setPlant={setPlant}/>
    </div>
  );
}

export default App;
