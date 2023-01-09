import React, { useState } from "react";
import data from "../data.json";
import "../style/characters.css";
import { ButtonSlider } from "../components/ButtonSlider";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Characters = () => {
  const [hodCharacter] = useState(data.characters);
  const [value, setValue] = useState(0);
  const [slideIndex, setSlideIndex] = useState(1);

  const { name, portrait, description, region, house } = hodCharacter[value];

  console.log(value)
  console.log(hodCharacter.length);
  console.log(hodCharacter);

  // const miniDot = index => {
  //   setValue(index)
  // }

  const nextSlide = () => {
    if (value !== hodCharacter.length) {
      setValue(value + 1);
    } else if (value === hodCharacter.length) {
      setValue(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(value.length);
    }
  };

  return (
    <section className="characters_container">
      <h3>
        01<span> CHOOSE YOUR MONARCH </span>
      </h3>{" "}
      <article className="characters_text">
        <ButtonSlider moveSlide={nextSlide} direction={"next"} />
        {/* <IoIosArrowBack />
        <IoIosArrowForward /> */}
        <ul className="characters_names">
          {hodCharacter.map((player, index) => (
            <li key={index} className="characters_names_list">
              <button onClick={() => setValue(index)}>{player.name}</button>
            </li>
          ))}
        </ul>

        <div className="characters_titles">
          <h4>{name}</h4>
          <p>of House | {house}</p>
          <p>Homeland | {region}</p>
        </div>
        <p id="characters_desc">{description}</p>
      </article>
      <img
        src={portrait}
        alt={name}
        title={name}
        width="400"
        height="500"
        loading="lazy"
        className="characters_image"
      />
    </section>
  );
};

export default Characters;
