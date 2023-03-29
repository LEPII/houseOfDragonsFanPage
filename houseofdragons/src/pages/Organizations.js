import React, { useRef, useEffect, useState } from "react";
import DataFile from "../data";
import "../style/organizations.css";
import { motion } from "framer-motion";

const Organizations = () => {
  const [hodOrgs] = useState(DataFile.organizations);
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="organizations_container">
      <article className="organizations_text">
        <h3>
          03 <span> JOIN A CAUSE</span>
        </h3>
        <motion.div
          ref={carousel}
          className="organizations_carousel"
          whileHover={{ scale: 1.01 }}
        >
          <motion.div
            className="organizations_inner_carousel"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {hodOrgs &&
              hodOrgs.map((comp, index) => {
                return (
                  <div className="organizations_titles" key={index}>
                    <h4>{comp.name} </h4>
                    <h6>Center: {comp.center}</h6>
                    <h6>Type: {comp.type}</h6> <p>{comp.description}</p>
                    <img
                      src={comp.images}
                      alt={comp.name}
                      title={comp.name}
                      width="300"
                      height="300"
                      loading="lazy"
                      className="organizations_image"
                    />
                  </div>
                );
              })}
          </motion.div>
        </motion.div>
      </article>
    </section>
  );
};

export default Organizations;
