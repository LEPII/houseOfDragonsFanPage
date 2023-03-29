import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import data from "../data.json";
import "../style/characters.css";
import { BsHandIndex } from "react-icons/bs";

const Characters = () => {
  const [hodCharacter] = useState(data.characters);
  const [width, setWidth] = useState(0);

  const carousel = useRef(null);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    const helper = document.querySelector(".helper_icon");
    helper.classList.add("helper_icon_load");
  }, []);

  return (
    <section className="characters_container">
      <article className="characters_text">
        <h3>
          01<span> CHOOSE YOUR MONARCH </span>
        </h3>
        <BsHandIndex className="helper_icon" />

        <motion.div
          ref={carousel}
          className="characters_carousel"
          whileHover={{ scale: 1.01 }}
        >
          <motion.div
            className="characters_inner_carousel"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {hodCharacter &&
              hodCharacter.map((player, index) => {
                return (
                  <motion.div className="characters_titles" key={index}>
                    <h4>{player.name}</h4>
                    <h6>of House: {player.house}</h6>
                    <h6>Homeland: {player.region}</h6>
                    <p>{player.description}</p>
                    <img
                      src={player.portrait}
                      alt={player.name}
                      title={player.name}
                      width="300"
                      height="300"
                      loading="lazy"
                      className="characters_image"
                    />
                  </motion.div>
                );
              })}
          </motion.div>
        </motion.div>
      </article>
    </section>
  );
};

export default Characters;
