import React from "react";

function NewPlantForm({plants, setPlant}) {

  function handleSubmit (e) {
    e.preventDefault()
    const newPlant = {
      name: e.target.name.value,
      image: e.target.image.value,
      price: e.target.price.value
    }

    console.log(newPlant)

  fetch('http://localhost:6001/plants', {
    method: 'POST',
    headers: {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(newPlant)
  })
  .then(resp => resp.json())
  .then((newPlant) => setPlant([...plants, newPlant]))

  }

  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
