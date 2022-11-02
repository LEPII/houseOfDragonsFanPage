import React, { useState } from "react";
import data from "../data.json";

const Characters = () => {
  const [hodCharacter] = useState(data.characters);
  const [value, setValue] = useState(0);

  const { name, portrait, description, region, house } = hodCharacter[value];

  return (
    <section>
      <article>
        <h3>01<span> CHOOSE YOUR MONARCH </span></h3> 
        <h3>{name}</h3>
        <p>of House: {house}</p>
        <p>Homeland: {region}</p>
        <p>{description}</p>
        <ul>
          {hodCharacter.map((player, index) => (
            <li key={index}>
              <button onClick={() => setValue(index)}>{player.name}</button>
            </li>
          ))}
        </ul>
      </article>
      <article>
        <img src={portrait} alt={name} title={name} width="400" height="500" />
      </article>
    </section>
  );
};

export default Characters;
