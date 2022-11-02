import React, { useState } from "react";
import data from "../data.json";

const Regions = () => {
  const [gotRegions] = useState(data.regions);
  const [value, setValue] = useState(0);

  // As we destructure the data from the state value into separate values, we set the "value" state to be the index value of our data that's being stored inside of our "spaceRocks" state.
  const { name, map, rulers, capital, bio } = gotRegions[value];
  return (
    <section>
      <article>
        <h3>
          02 <span> PICK YOUR DESTINATION </span>
        </h3>
        <img src={map} alt={name} title={name} width="500" height="500" />
      </article>
      <article>
        <ul>
          {gotRegions.map((places, index) => (
            <li key={index}>
              <button onClick={() => setValue(index)}>{places.name}</button>
            </li>
          ))}
        </ul>
        <h2>{name} </h2>
        <h6>Rulers: {rulers}</h6>
        <h6>Capital: {capital}</h6> <br />
        <p>{bio} </p>
      </article>
    </section>
  );
};

export default Regions;
