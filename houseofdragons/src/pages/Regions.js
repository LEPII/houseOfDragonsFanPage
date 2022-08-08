import React, { useState } from "react";
import data from "../data.json";

const Regions = () => {
  const [spaceRocks] = useState(data.destinations);
  const [value, setValue] = useState(0);

  // As we destructure the data from the state value into separate values, we set the "value" state to be the index value of our data that's being stored inside of our "spaceRocks" state.
  const { name, images, description, distance, travel } = spaceRocks[value];
  return (
    <section>
      <article>
        <h3>01</h3> <span> PICK YOUR DESTINATION </span>
        <img src={images.png} alt={name} title={name} />
        <ul>
          {spaceRocks.map((rocks, index) => (
            <li key={index}>
              <button onClick={() => setValue(index)}>{rocks.name}</button>
            </li>
          ))}
        </ul>
      </article>
      <article>
        <h2>{name} </h2> <p>{description} </p> <br />
        <p>AVG. DISTANCE</p>
        <h6>{distance}</h6>
        <p>EST. TRAVEL TIME</p>
        <h6>{travel}</h6>
      </article>
    </section>
  );
};

export default Regions;
