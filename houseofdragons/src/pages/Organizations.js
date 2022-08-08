import React, { useState } from "react";
import data from "../data.json";

const Organizations = () => {
    const [westerosOrgs] = useState(data.organizations);
    const [value, setValue] = useState(0);

    const { name, images, description, type, center } = westerosOrgs[value];

  return (
    <section>
      <h3>03</h3> <span> Westeros Organizations </span>
      <article>
        <ul>
          {orgs.map((org, index) => (
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
<ul> <li>{type}</li>
<li>{center}</li></u> 
      </article>
      <article>
        <img src={images} alt={name} title={name} />
      </article>
    </section>
  );
};

export default Organizations;
