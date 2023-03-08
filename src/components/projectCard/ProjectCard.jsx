import React from "react";
import "./ProjectCard.scss";

function ProjectCard({ card }) {
  return (
    <div className="projectCard">
      <img src={card.img} alt="" />
      <div className="info">
       
        <div className="texts">
          <h2>{card.cat}</h2>
         
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
