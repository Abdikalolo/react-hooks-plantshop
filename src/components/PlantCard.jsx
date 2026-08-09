import React from "react";

function PlantCard({ plant }) {
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h2>{plant.name}</h2>
      <p>Price: ${plant.price}</p>
      <button>In Stock</button>
    </li>
  );
}

export default PlantCard;