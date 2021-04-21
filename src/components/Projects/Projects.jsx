import React from "react";
import * as projects from "./portfolioProjects.json";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className='project-container'>
      {projects.projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
