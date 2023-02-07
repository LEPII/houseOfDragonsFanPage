import React, { useState } from "react";
import data from "../data.json";
import "../style/regions.css";

const Regions = () => {
  const [gotRegions] = useState(data.regions);
  const [value, setValue] = useState(0);

  const { name, map, rulers, capital, bio } = gotRegions[value];
  return (
    <section className="regions_container">
        <article className="regions_text"> <h3>
          02 <span> PICK YOUR DESTINATION </span>
        </h3>
        <ul className="regions_names">
          {gotRegions.map((places, index) => (
            <li key={index}>
              <button onClick={() => setValue(index)}>{places.name}</button>
            </li>
          ))}
        </ul>
        <h2>{name} </h2>
        <h6>Rulers | {rulers}</h6>
        <h6>Capital | {capital}</h6> <br />
        <p>{bio} </p>
      </article>      <img
          src={map}
          alt={name}
          title={name}
          width="300"
          height="300"
          className="regions_image"
        />
    </section>
  );
};

export default Regions;
