import React from "react";
import { Link } from "react-router-dom";
import "../style/home.css";

const Home = () => {
  return (
    <section className="home_container">
      <p>
        What is this breif, mortal life, if not the pursuit of legacy?
      </p>
      <h1>
        House of Dragons <br />
      </h1>
      <h2>Fan Page</h2>
      <p>
        Explore the monarchs that keeps the kingdoms at bay with their dragons,
        the lands they rule and sometimes burn to conquer, and the groups that
        keeps everything together from remembering the world's memories to
        protecting us from the long night...
      </p>

      <Link to="/characters" className="explore_button">
        EXPLORE
      </Link>
    </section>
  );
};

export default Home;
