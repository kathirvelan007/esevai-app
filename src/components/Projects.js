import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects section">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">Healthcare Service API</div>
        <div className="project-card">React Portfolio Website</div>
        <div className="project-card">CSV File Manager (Java)</div>
      </div>
    </section>
  );
}

export default Projects;
