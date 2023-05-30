import React from "react";

function NewPlantForm({plants, setPlants}) {

  function addNewPlant (e) {
    e.preventDefault()
    //Need to make a variable thats an empty plant object since we are adding it to our db.json
    const newPlant = {
      name: e.target.name.value,
      image: e.target.image.value,
      price: e.target.price.value
    }
    //Make the POST request
    fetch("http://localhost:6001/plants",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
    .then((resp) => resp.json())
    .then((newPlant) => setPlants([...plants, newPlant]))
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {addNewPlant}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
