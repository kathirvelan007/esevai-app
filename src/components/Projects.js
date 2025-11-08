import React from "react";
import "./Projects.css";
import { useLanguage } from "../LanguageContext";

function Projects() {
  const { lang } = useLanguage();
  return (
    <section id="projects" className="projects section">
      {lang === "en" ? (
        <>
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">Healthcare Service API</div>
        <div className="project-card">React Portfolio Website</div>
        <div className="project-card">CSV File Manager (Java)</div>
      </div>
      </>
      ) : (
        <>
        <h2>வணக்கம்</h2>
      <div className="project-grid">
        <div className="project-card">தொழில்நுட்பங்களை</div>
        <div className="project-card">மென்பொருள்</div>
        <div className="project-card">அனுபவம்</div>
      </div>
        </>

      )}
    </section>
  );
}

export default Projects;
