import { useState } from "react";
import data from "../data.json";
import "../style/characters.css";
import { Carousel } from "react-carousel-minimal";
 
const Characters = () => {
  const [hodCharacter] = useState(data.characters);
  const [value, setValue] = useState(0);
  const { name, portrait, description, region, house } = hodCharacter[value];
console.log(hodCharacter)
console.log(Carousel)
  return (
    <section className="characters_container">
      <img
        src={portrait}
        alt={name}
        title={name}
        width="350"
        height="300"
        loading="lazy"
        className="characters_image"
      />
      <article className="characters_text">
        <h3>
          01<span> CHOOSE YOUR MONARCH </span>
        </h3>
        <ul className="characters_names">
          {hodCharacter.map((player, index) => (
            <li key={index}>
              <button onClick={() => setValue(index)}>{player.name}</button>
            </li>
          ))}
        </ul>
        <div className="characters_titles">
          <h4>{name}</h4>
          <p>of House | {house}</p>
          <p>Homeland | {region}</p>
          <p>{description}</p>
        </div>
      </article>
    </section>
  );
};

export default Characters;
