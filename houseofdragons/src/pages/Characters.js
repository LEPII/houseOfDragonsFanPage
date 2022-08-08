import React, { useState } from "react";
import data from "../data.json";

const Characters = () => {
  const [Character] = useState(data.characters);
  const [value, setValue] = useState(0);

  const { name, portrait, description, region, house } = Character[value];


  return (
    <section>
      <h3>02</h3> <span> MEET YOUR CREW </span>
      <article>
        <h2>{region}</h2>
        <h2>{house}</h2>
        <h3>{name}</h3>
        <p>{description}</p>
      </article>
      <article>
        <img src={portrait} alt={name} title={name} />
      </article>
    </section>
  );
};

export default Characters;
