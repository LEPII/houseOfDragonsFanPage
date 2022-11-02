import React from "react";
import { Link } from "react-router-dom";
import "../style/home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home_body">
        <span>
          What is this breif, mortal life, if not the pursuit of legacy?
        </span>
        <h1> House of Dragons</h1>
        <h3> Fan Page</h3>
        <p>
          Explore the monarchs that keeps the kingdoms at bay with their
          dragons, the lands they rule and sometimes burn to conquer, and the
          groups that keeps everything together from remembering the world's
          memories to protecting us from the long night...
        </p>
   
      <Link to="/characters"> Explore </Link>
       </div> </section>
  );
};

export default Home;
