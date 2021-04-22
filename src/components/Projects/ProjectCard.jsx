import React from "react";
import "./Projects.css";
// import "./ProjectCard.css";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className='main-container'>
      <div className='card-container'>
        <h1>{project.header}</h1>
        <div className='card-photo'>
          <img src={project.img} alt='' />
        </div>
        <p>{project.description}</p>
      </div>
      <div className='button'>
        <Link to={{ pathname: project.link }} target='_blank'>
          <button>Project</button>
        </Link>
      </div>
    </div>
  );
}
