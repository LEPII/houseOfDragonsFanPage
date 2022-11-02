import React, { useState } from "react";
import data from "../data.json";

const Organizations = () => {
  const [hodOrgs] = useState(data.organizations);
  const [value, setValue] = useState(0);

  const { name, images, description, type, center } = hodOrgs[value];

  return (
    <section>
      <h3>
        03 <span> JOIN A CAUSE</span>
      </h3>
      <article>
        <ul>
          {hodOrgs.map((org, index) => (
            <li key={index}>
              <button onClick={() => setValue(index)}>{index + 1}</button>
            </li>
          ))}
        </ul>
      </article>
      <article>
        <h1>{name} </h1>
        <p>{description}</p>
        <h6>Center: {center}</h6>
        <h6>Type: {type}</h6>
      </article>
      <article>
        <img src={images} alt={name} title={name} width="700" height="400" />
      </article>
    </section>
  );
};

export default Organizations;
