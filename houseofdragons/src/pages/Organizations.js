import React, { useState } from "react";
import data from "../data.json";
import "../style/organizations.css"

const Organizations = () => {
  const [hodOrgs] = useState(data.organizations);
  const [value, setValue] = useState(0);

  const { name, images, description, type, center } = hodOrgs[value];

  return (
    <section className="organizations_container">
         <article className="organizations_text">
      <h3>
        03 <span> JOIN A CAUSE</span>
      </h3>
        <ul className="organizations_name">
          {hodOrgs.map((org, index) => (
            <li key={index}>
              <button onClick={() => setValue(index)}>{org.name}</button>
            </li>
          ))}
        </ul>
        <div className="organizations_titles">
        <h4>{name} </h4>
        <h6>Center: {center}</h6>
        <h6>Type: {type}</h6>    <p>{description}</p></div>
      
</article>
      <img src={images} alt={name} title={name}  width="300"
          height="300" loading="lazy"
        className="organizations_image" />
    </section>
  );
};

export default Organizations;
