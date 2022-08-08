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
        <h3>01</h3> <span> PICK YOUR DESTINATION </span>
        <img src={map} alt={name} title={name} />
        <ul>
          {gotRegions.map((regs, index) => (
            <li key={index}>
              <button onClick={() => setValue(index)}>{regs.name}</button>
            </li>
          ))}
        </ul>
      </article>
      <article>
        <h2>{name} </h2> <p>{bio} </p> <br />
        <p> Rulers </p>
        <h6>{rulers}</h6>
        <p>Capital</p>
        <h6>{capital}</h6>
      </article>
    </section>
  );
};

export default Regions;
