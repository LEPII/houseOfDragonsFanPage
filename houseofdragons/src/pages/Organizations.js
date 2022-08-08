import React, { useState } from "react";
import data from "../data.json";

const Organizations = () => {
    const [spaceTech] = useState(data.technology);
    const [value, setValue] = useState(0);

    const { name, images, description } = spaceTech[value];

  return (
    <section>
      <h3>03</h3> <span> SPACE LAUNCH 101 </span>
      <article>
        <ul>
          {spaceTech.map((tech, index) => (
            <li key={index}>
              <button onClick={() => setValue(index)}>{index + 1}</button>
            </li>
          ))}
        </ul>
      </article>
      <article>
        <p>THE TERMINOLOGY...</p>
        <h1>{name} </h1>
        <p>{description}</p>
      </article>
      <article>
        <img src={images.portrait} alt={name} title={name} />
      </article>
    </section>
  );
};

export default Organizations;
