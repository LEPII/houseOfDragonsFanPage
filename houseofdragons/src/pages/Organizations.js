import React, { useState } from "react";
import data from "../data.json";

const Organizations = () => {
    const [gotOrgs] = useState(data.organizations);
    const [value, setValue] = useState(0);

    const { name, images, description, type, center } = gotOrgs[value];

  return (
    <section>
      <h3>03</h3> <span> JOIN A CAUSE</span>
      <article>
        <ul>
          {gotOrgs.map((org, index) => (
            <li key={index}>
              <button onClick={() => setValue(index)}>{index + 1}</button>
            </li>
          ))}
        </ul>
      </article>
      <article>
        <h1>{name} </h1>
        <p>{description}</p>
        <ul>
          <li>{type}</li>
          <li>{center}</li>
        </ul>
      </article>
      <article>
        <img src={images} alt={name} title={name} width="800" height="500" />
      </article>
    </section>
  );
};

export default Organizations;
