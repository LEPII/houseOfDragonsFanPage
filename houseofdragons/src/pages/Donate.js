import React from "react";
import "../style/donate.css";
import MomAndSon from "./Donate/MomAndSon.jpeg"

const Donate = () => {
  return (
    <section className="dnt_container">
      <h1>Support Venezuelans In Need Of Food And Education </h1>
      <div className="dnt_what_section" id="dnt_title">
        <h3> What Is It?</h3>
        <span>
          Coromoto 2020 is a non-profit organization of a group of committed lay
          people from the Catholic Church, whose mission is to strengthen the
          most vulnerable Venezuelan families in their needs for food and
          training in values; transmitting hope and generating a deep social
          commitment in our volunteers.
        </span>
      </div>
      <div className="dnt_how_section">
        <h3> How Can I Help?</h3>
        <span>
          On their website link below, You can make a donation in money or
          products (flour, rice, sugar, beans, soy meat and pasta) and the
          Coromoto 2020 team will take care of the distribution.
        </span>
      </div>
      <h1> Visit Their Website And Make A Difference Today</h1>
      <button className="dnt_btn">VISIT</button>
      <img
        src={MomAndSon}
        alt={"Mother with Son"}
        width="300"
        height="300"
        loading="lazy"
        className="dnt_image"
      />
    </section>
  );
};

export default Donate;
