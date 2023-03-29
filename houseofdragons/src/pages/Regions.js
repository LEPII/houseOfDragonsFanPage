import React, { useRef, useEffect, useState } from "react";
import data from "../data.json";
import "../style/regions.css";
import { motion } from "framer-motion";

const Regions = () => {
  const [gotRegions] = useState(data.regions);
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="regions_container">
      <article className="regions_text">
        <h3>
          02 <span> PICK YOUR DESTINATION </span>
        </h3>
        <motion.div
          ref={carousel}
          className="regions_carousel"
          whileHover={{ scale: 1.01 }}
        >
          <motion.div
            className="regions_inner_carousel"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {gotRegions &&
              gotRegions.map((country, index) => {
                return (
                  <motion.div className="regions_name" key={index}>
                    <h2>{country.name} </h2>
                    <h6>Rulers | {country.rulers}</h6>
                    <h6>Capital | {country.capital}</h6> <br />
                    <p>{country.bio} </p>
                    <img
                      src={country.map}
                      alt={country.name}
                      title={country?.name}
                      width="250"
                      height="250"
                      className="regions_image"
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

export default Regions;
